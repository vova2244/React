"use client"

import React, { useState } from 'react';
import { Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const HeritageSiteDetails = ({ title, description, imageSrc }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <div>
      <img alt={title} src={imageSrc} style={{ maxWidth: '100%' }} />
      <Title level={2}>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <Button type={isLiked ? 'primary' : 'default'} onClick={handleLike}>
        {isLiked ? 'Liked' : 'Like'}
      </Button>
    </div>
  );
};

export default HeritageSiteDetails;