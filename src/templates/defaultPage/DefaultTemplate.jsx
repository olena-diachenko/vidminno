import React from 'react';
import {
  Container,
  Header,
  Footer,
  Content,
  Sidenav,
  Nav,
  Navbar,
  Sidebar,
  Popover,
  Whisper,
  Dropdown,
  Stack,
  Avatar,
} from 'rsuite';
import { Link } from 'react-router-dom';
import { Icon } from '@rsuite/icons';
import {
  FaBars,
  FaJsSquare,
  FaReact,
  FaRegNewspaper,
  FaUser,
  FaMoon,
} from 'react-icons/fa';
import DashboardIcon from '@rsuite/icons/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineLightMode } from 'react-icons/md';
import { changeTheme } from '../../store/slices/theme';
import admin from './constants';
import styles from './style.module.scss';
import { removeUser } from '../../store/slices/auth';
import { setExpand } from '../../store/slices/navMenu';
import useAuth from '../../hooks/useAuth';
import { useGetUserByEmailQuery } from '../../store/api';

const DefaultTemplate = props => {
  const expand = useSelector(state => state.navMenu.expand);
  const trigger = React.useRef();
  const { email } = useAuth();
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();
  const { data: student, isLoading } = useGetUserByEmailQuery(email);

  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ));

  const renderUserSpeaker = (options, ref) => {
    const handleSelect = () => {
      options.onClose();
    };

    const handleClick = () => {
      dispatch(removeUser());
    };

    return (
      <Popover
        ref={ref}
        className={options.className}
        style={{ left: options.left, top: options.top }}
        full
      >
        <Dropdown.Menu onSelect={handleSelect}>
          <div className={styles.popover__items}>
            <p>Signed in as</p>
            <strong>{admin === email ? 'Admin' : 'Student'}</strong>
            <Dropdown.Separator />
            <Link
              to="/vidminno/sign-in"
              className={styles.popover__link}
              onClick={handleClick}
            >
              Sign out
            </Link>
          </div>
        </Dropdown.Menu>
      </Popover>
    );
  };

  const expandHandler = () => {
    dispatch(setExpand());
  };

  return (
    <>
      <Container>
        <Sidebar
          className={styles.sidebar}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div className={styles.brand}>
              <Link to="/vidminno" className={styles.brand__link}>
                {expand ? (
                  <span className={styles.brand__open}>V I D M I N N O</span>
                ) : (
                  <span className={styles.brand__close}>V</span>
                )}
              </Link>
            </div>
          </Sidenav.Header>
          <Sidenav expanded={expand} appearance="subtle">
            <Sidenav.Body>
              <Nav>
                <Nav.Item
                  eventKey="1"
                  icon={<DashboardIcon />}
                  as={NavLink}
                  href="/vidminno"
                >
                  Dashboard
                </Nav.Item>
                <Nav.Menu
                  eventKey="2"
                  trigger="hover"
                  title="JS Course"
                  icon={<Icon as={FaJsSquare} />}
                  placement="rightStart"
                >
                  <Nav.Item
                    eventKey="2-1"
                    as={NavLink}
                    href="/vidminno/js-course/lessons"
                  >
                    Lessons
                  </Nav.Item>
                  <Nav.Item
                    eventKey="2-2"
                    as={NavLink}
                    href="/vidminno/js-course/homeworks"
                  >
                    Homeworks
                  </Nav.Item>
                </Nav.Menu>
                <Nav.Menu
                  eventKey="3"
                  trigger="hover"
                  title="React Course"
                  icon={<Icon as={FaReact} />}
                  placement="rightStart"
                >
                  <Nav.Item
                    eventKey="3-1"
                    as={NavLink}
                    href="/vidminno/react-course/lessons"
                  >
                    Lessons
                  </Nav.Item>
                  <Nav.Item
                    eventKey="3-2"
                    as={NavLink}
                    href="/vidminno/react-course/homeworks"
                  >
                    Homeworks
                  </Nav.Item>
                </Nav.Menu>
                <Nav.Item
                  eventKey="4"
                  as={NavLink}
                  icon={<Icon as={FaRegNewspaper} />}
                  href="/vidminno/technical-articles/"
                >
                  Technical articles
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <Navbar appearance="subtle" className="nav-toggle">
            <Nav pullRight>
              <Nav.Item
                onClick={expandHandler}
                className={styles.sidebar__navItem}
                icon={<Icon as={FaBars} className={styles.sidebar__navIcon} />}
              ></Nav.Item>
            </Nav>
          </Navbar>
        </Sidebar>
        <Container>
          <Header className={styles.header}>
            <Stack spacing={20}>
              {!isLoading && <p>{student[0].username}</p>}

              <Whisper
                placement="bottomEnd"
                trigger="click"
                ref={trigger}
                speaker={renderUserSpeaker}
              >
                <Avatar size="sm" alt="avatar" className={styles.avatar}>
                  <Icon as={FaUser} />
                </Avatar>
              </Whisper>

              <Icon
                as={theme === 'light' ? FaMoon : MdOutlineLightMode}
                onClick={handleChangeTheme}
                className={styles.header__themeIcon}
              />
            </Stack>
          </Header>
          <Content
            className={styles.content}
            style={{ marginLeft: expand ? 260 : 56, marginTop: 56 }}
          >
            {props.children}
          </Content>
          <Footer
            className={styles.footer}
            style={{ marginLeft: expand ? 260 : 56 }}
          >
            Copyright &copy; V I D M I N N O, {new Date().getFullYear()}
          </Footer>
        </Container>
      </Container>
    </>
  );
};

export default DefaultTemplate;
