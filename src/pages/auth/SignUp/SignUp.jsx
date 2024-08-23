import { useState, useRef } from 'react';
import {
  Form,
  Button,
  Panel,
  InputGroup,
  Stack,
  Schema,
  Divider,
} from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { Link } from 'react-router-dom';
import { useCreateUserMutation } from '../../../store/api';
import PopUp from '../../../components/PopUp';

const SignUp = () => {
  const formRef = useRef();
  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [createUser] = useCreateUserMutation();

  const handleSubmit = async e => {
    if (!formRef.current.check()) return;
    setModal(!modal);
    await createUser(formValue);
  };

  const { StringType } = Schema.Types;

  const model = Schema.Model({
    username: StringType()
      .isRequired('This field is required.')
      .minLength(3, "Can't be less than 3 characters")
      .maxLength(50, 'Cannot be greater than 50 characters'),
    email: StringType()
      .isEmail('Please enter a valid email address.')
      .isRequired('This field is required.'),
    password: StringType()
      .isRequired('This field is required.')
      .containsLetter('Must contain English characters')
      .containsNumber('Must contain numbers')
      .minLength(6, 'Minimum 6 characters required'),
  });

  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="column"
        style={{
          height: '100vh',
        }}
      >
        <Panel
          header={<h3>Create an Account</h3>}
          bordered
          style={{ width: 400 }}
        >
          <p>
            <span>Already have an account?</span>{' '}
            <Link to="/vidminno/sign-in">Sign in here</Link>
          </p>

          <Divider>OR</Divider>

          <Form
            fluid
            model={model}
            ref={formRef}
            onChange={setFormValue}
            formValue={formValue}
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
              <InputGroup inside style={{ width: '100%' }}>
                <Form.Control
                  name="password"
                  type={visible ? 'text' : 'password'}
                  autoComplete="off"
                />
                <InputGroup.Button onClick={() => setVisible(!visible)}>
                  {visible ? <EyeIcon /> : <EyeSlashIcon />}
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
        open={modal}
        title="Your account has been successfully created!"
        path="/vidminno/sign-in"
      >
        You can sign in now.
      </PopUp>
    </>
  );
};

export default SignUp;
