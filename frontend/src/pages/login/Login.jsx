import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './loginForm.css';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';


//const API_URL = 'http://localhost:8000/api/';


const LoginForm = () => {
    let { loginUser } = useContext(AuthContext);

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={loginUser}
        >
            <h1 className="login-title">Log in to Your Account</h1>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined />} placeholder="Username" autoComplete="new-password"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input.Password prefix={<LockOutlined />} placeholder="Password" autoComplete="new-password"/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" >
                    Log in
                </Button>
                Or <a href="/register">register now!</a>
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="/">
                    Forgot password?
                </a>
            </Form.Item>

        </Form>
    );
};

export default LoginForm;
