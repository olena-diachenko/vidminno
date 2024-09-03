import React, { useState } from 'react';
import { Form, Button, Panel, InputGroup, Stack, Divider } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../../store/slices/auth';
import styles from '../SignUp/style.module.scss';
import initialValues from './constants';
import model from './validationSchema';
import PopUp from '../../../components/PopUp';

const SignIn = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [formValues, setFormValues] = React.useState(initialValues);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIconClick = () => setIsVisible(!isVisible);

  const handlePopUpClose = () => setIsOpen(true);

  const handlePopUpClick = () => {
    navigate('/vidminno/sign-in');
    setIsOpen(false);
  };

  const handleSubmit = async ev => {
    const auth = getAuth();
    const { email, password } = formValues;
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        navigate('/vidminno');
      })
      .catch(() => setIsOpen(true));
  };

  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="column"
        className={styles.auth}
      >
        <Panel
          header={<p className={styles.auth__headingText}>Sign In</p>}
          bordered
          className={styles.auth__heading}
        >
          <div>
            <span className="text-muted">New Here? </span>{' '}
            <Link to="/vidminno/sign-up"> Create an Account</Link>
          </div>

          <Divider>OR</Divider>

          <Form
            fluid
            onChange={setFormValues}
            formValue={formValues}
            model={model}
          >
            <Form.Group>
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Password</Form.ControlLabel>
              <InputGroup inside>
                <Form.Control
                  name="password"
                  type={isVisible ? 'text' : 'password'}
                  autoComplete="off"
                />
                <InputGroup.Button onClick={handleIconClick}>
                  {isVisible ? <EyeIcon /> : <EyeSlashIcon />}
                </InputGroup.Button>
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <Stack spacing={6}>
                <Button appearance="primary" onClick={handleSubmit}>
                  Sign in
                </Button>
              </Stack>
            </Form.Group>
          </Form>
        </Panel>
      </Stack>
      <PopUp
        isOpen={isOpen}
        onClose={handlePopUpClose}
        onClick={handlePopUpClick}
      >
        Invalid email or password!
      </PopUp>
    </>
  );
};

export default SignIn;
