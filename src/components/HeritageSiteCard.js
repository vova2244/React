"use client"

import React from 'react';
import { Card, Typography, Button } from 'antd';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const HeritageSiteCard = ({ id, title, description, imageSrc, onSave }) => {
  const handleSave = () => {
    onSave({ id, title, description, imageSrc });
  };

  return (
    <Card
      hoverable
      style={{ width: 300, margin: 16 }}
      cover={<img alt={title} src={imageSrc} />}
    >
      <Meta title={<Title level={4}>{title}</Title>} description={<Paragraph>{description}</Paragraph>} />
      <Button onClick={handleSave} style={{ marginTop: 16 }}>Save</Button>
    </Card>
  );
};

export default HeritageSiteCard;