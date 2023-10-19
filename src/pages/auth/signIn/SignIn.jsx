import React from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../store/slices/auth';

const SignIn = () => {
    const formRef = React.useRef();
    const [visible, setVisible] = React.useState(false);
    const [formValue, setFormValue] = React.useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { StringType } = Schema.Types;

    const model = Schema.Model({
        username: StringType().isRequired('This field is required.'),
        password: StringType().isRequired('This field is required.'),
    });

    const handleSubmit = async e => {
        if (!formRef.current.check()) return;
        dispatch(setCredentials(formValue.username));
        navigate('/');
    };

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            direction="column"
            style={{
                height: '100vh',
            }}
        >
            <Panel header={<h3>Sign In</h3>} bordered style={{ width: 400 }}>
                <p style={{ marginBottom: 10 }}>
                    <span className="text-muted">New Here? </span>{' '}
                    <Link to="/sign-up"> Create an Account</Link>
                </p>

                <Divider>OR</Divider>

                <Form
                    fluid
                    ref={formRef}
                    onChange={setFormValue}
                    formValue={formValue}
                    model={model}
                >
                    <Form.Group>
                        <Form.ControlLabel>Username</Form.ControlLabel>
                        <Form.Control name="username" />
                    </Form.Group>
                    <Form.Group>
                        <Form.ControlLabel>Password</Form.ControlLabel>
                        <InputGroup inside style={{ width: '100%' }}>
                            <Form.Control
                                name="password"
                                type={visible ? 'text' : 'password'}
                                autoComplete="off"
                            />
                            <InputGroup.Button
                                onClick={() => setVisible(!visible)}
                            >
                                {visible ? <EyeIcon /> : <EyeSlashIcon />}
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
    );
};

export default SignIn;
