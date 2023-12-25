"use client"

import React from 'react';
import { Card, Form, Input, Button, message } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/authSlice';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(registerUser(data));
      message.success('Registration successful');
    } catch (error) {
      message.error('Registration failed. Please try again.');
    }
  };

  return (
    <Card title="Registration" style={{ width: 300, margin: 'auto', marginTop: 50 }}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Form.Item label="Username" help={errors.username?.message} validateStatus={errors.username ? 'error' : ''}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item label="Email" help={errors.email?.message} validateStatus={errors.email ? 'error' : ''}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item label="Password" help={errors.password?.message} validateStatus={errors.password ? 'error' : ''}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input.Password {...field} />}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default RegistrationForm;