import React, { useState, useRef } from 'react';
import { Form, Button, Panel, InputGroup, Stack, Divider } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useCreateUserMutation } from '../../../store/api';
import PopUp from '../../../components/PopUp';
import styles from './style.module.scss';
import model from './validationSchema';
import initialValues from './constants';
import { setUser } from '../../../store/slices/auth';

const SignUp = () => {
  const formRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [createUser] = useCreateUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIconClick = () => setIsVisible(!isVisible);

  const handlePopUpClose = () => setIsOpen(true);

  const handlePopUpClick = () => {
    navigate('/vidminno');
    setIsOpen(false);
  };

  const handleSubmit = async e => {
    if (!formRef.current.check()) return;
    const auth = getAuth();
    const { email, password } = formValues;
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        setFormValues({
          username: formValues.username,
          email: user.email,
        });
      })
      .catch(console.error);
    await createUser(formValues);
    setIsOpen(true);
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
          header={<p className={styles.auth__headingText}>Create an Account</p>}
          bordered
          className={styles.auth__heading}
        >
          <div>
            <span>Already have an account?</span>{' '}
            <Link to="/vidminno/sign-in">Sign in here</Link>
          </div>

          <Divider>OR</Divider>

          <Form
            fluid
            model={model}
            ref={formRef}
            onChange={setFormValues}
            formValue={formValues}
          >
            <Form.Group>
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control name="username" />
            </Form.Group>

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
                  Submit
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
        Your account has been successfully created!
      </PopUp>
    </>
  );
};

export default SignUp;
