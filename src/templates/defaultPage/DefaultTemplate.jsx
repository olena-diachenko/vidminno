import React from 'react';
import {
    Container,
    Header,
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
} from 'react-icons/fa';
import DashboardIcon from '@rsuite/icons/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { changeTheme } from '../../store/slices/theme';
import admin from '../../utils/admin';
import styles from './style.module.scss';

const DefaultTemplate = props => {
    const [expand, setExpand] = React.useState(true);
    const trigger = React.useRef();
    const user = useSelector(state => state.auth.user);
    const isAdmin = `${admin.name} ${admin.surname}`;
    const theme = useSelector(state => state.theme.theme);
    const dispatch = useDispatch();

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
                        <strong>
                            {isAdmin === user ? 'Admin' : 'Student'}
                        </strong>
                        <Dropdown.Separator />
                        <Link to="/sign-in" className={styles.popover__link}>
                            Sign out
                        </Link>
                    </div>
                </Dropdown.Menu>
            </Popover>
        );
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
                            <Link to="/" className={styles.brand__link}>
                                {expand ? (
                                    <span className={styles.brand__open}>
                                        V I D M I N N O
                                    </span>
                                ) : (
                                    <span className={styles.brand__close}>
                                        V
                                    </span>
                                )}
                            </Link>
                        </div>
                    </Sidenav.Header>
                    <Sidenav
                        expanded={expand}
                        defaultOpenKeys={['3']}
                        appearance="subtle"
                    >
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item
                                    eventKey="1"
                                    icon={<DashboardIcon />}
                                    as={NavLink}
                                    href="/"
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
                                    <Nav.Item eventKey="2-1">Lessons</Nav.Item>
                                    <Nav.Item eventKey="2-2">
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
                                    <Nav.Item eventKey="3-1">Lessons</Nav.Item>
                                    <Nav.Item eventKey="3-2">
                                        Homeworks
                                    </Nav.Item>
                                </Nav.Menu>
                                <Nav.Item
                                    eventKey="4"
                                    icon={<Icon as={FaRegNewspaper} />}
                                >
                                    Technical articles
                                </Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                    <Navbar appearance="subtle" className="nav-toggle">
                        <Nav pullRight>
                            <Nav.Item
                                onClick={() => setExpand(!expand)}
                                className={styles.sidebar__navItem}
                                icon={
                                    <Icon
                                        as={FaBars}
                                        className={styles.sidebar__navIcon}
                                    />
                                }
                            ></Nav.Item>
                        </Nav>
                    </Navbar>
                </Sidebar>
                <Container>
                    <Header className={styles.header}>
                        <Stack spacing={20}>
                            <p>{user}</p>

                            <Whisper
                                placement="bottomEnd"
                                trigger="click"
                                ref={trigger}
                                speaker={renderUserSpeaker}
                            >
                                <Avatar
                                    size="sm"
                                    alt="avatar"
                                    className={styles.avatar}
                                >
                                    <Icon as={FaUser} />
                                </Avatar>
                            </Whisper>

                            <Icon
                                as={
                                    theme === 'light'
                                        ? MdOutlineNightlight
                                        : MdOutlineLightMode
                                }
                                onClick={handleChangeTheme}
                                className={styles.header__themeIcon}
                            />
                        </Stack>
                    </Header>
                    <Content className={styles.content}>
                        {props.children}
                    </Content>
                </Container>
            </Container>
        </>
    );
};

export default DefaultTemplate;
