import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import './registerForm.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';


const RegisterForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const registerUser = async (formData) => {
    const response = await axios.post('http://localhost:8000/register/', formData);
    return response.data;
  };

  const { mutate, isLoading, isSuccess, isError, error } = useMutation(registerUser);

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append('username', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('confirm_password', values.confirm);
    mutate(formData);
    console.log('Success',values);

  };

  useEffect(() => {
    if (isSuccess) {
      message.success('Registered successfully!');
      navigate('/');
    }
  }, [isSuccess, navigate]);



  return (
    <Form form={form}
      name="register"
      className="register-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1 className="register-title">Create Your Account</h1>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
          {
            type: 'email',
            message: 'Please enter a valid email',
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="agreement" valuePropName="checked" noStyle rules={[{ required: true, message: 'Please accept terms and conditions!' }]}>
          <Checkbox>
            I have read the <a href="/">agreement</a>
          </Checkbox>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="register-form-button">
          Register
        </Button>
        Or <a href="/login">login now!</a>
      </Form.Item>
    </Form>
  );
}

export default RegisterForm;
