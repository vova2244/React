"use client"

import React from 'react';
import { Card, Typography, Button } from 'antd';
import { useRouter } from 'next/navigation'

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const HeritageSiteCard = ({ id, title, description, imageSrc, onSave }) => {
  const router = useRouter()

  const handleSave = () => {
    onSave({ id, title, description, imageSrc });
  };

  const handleClick = () => {
    router.push(`/heritage/${id}`);
  };

  return (
    <Card
      hoverable
      style={{ width: 300, margin: 16 }}
      cover={<img alt={title} src={imageSrc} />}
    >
      <Meta title={<Title level={4}>{title}</Title>} description={<Paragraph>{description}</Paragraph>} />
      <Button onClick={handleSave} style={{ marginTop: 8 }}>Зберегти</Button>
      <Button onClick={handleClick} style={{ marginTop: 8 }}>Деталі</Button>
    </Card>
  );
};

export default HeritageSiteCard;