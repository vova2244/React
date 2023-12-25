"use client"

import React from 'react';
import { Card, Form, Input, Button, Typography } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const { Title, Paragraph } = Typography;

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  imageSrc: yup.string().url('Image URL is not valid').required('Image URL is required'),
});

const HeritageSiteForm = ({ onSubmit }) => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Card title="Create Heritage Site" style={{ width: 400, margin: '16px' }}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label="Title"
          name="title"
          hasFeedback
          validateStatus={errors.title ? 'error' : ''}
          help={errors.title?.message}
        >
          <Controller
            control={control}
            name="title"
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          hasFeedback
          validateStatus={errors.description ? 'error' : ''}
          help={errors.description?.message}
        >
          <Controller
            control={control}
            name="description"
            render={({ field }) => <Input.TextArea {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="Image URL"
          name="imageSrc"
          hasFeedback
          validateStatus={errors.imageSrc ? 'error' : ''}
          help={errors.imageSrc?.message}
        >
          <Controller
            control={control}
            name="imageSrc"
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default HeritageSiteForm;