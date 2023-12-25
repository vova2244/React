"use client"

import React from 'react';
import { Typography, Row, Col } from 'antd';
import HeritageSiteCard from '../components/HeritageSiteCard';

const { Title } = Typography;

const heritageSites = [
  {
    id: 1,
    title: 'Kyiv: Saint-Sophia Cathedral and Related Monastic Buildings, Kyiv-Pechersk Lavra',
    description: 'This property is a masterpiece of the creative genius...',
    imageSrc: '/images/kyiv.jpg',
  },
];

const HomePage = () => {
  return (
    <div>
      <div style={{ padding: 16 }}>
        <Title level={2}>UNESCO Heritage Sites in Ukraine</Title>
        <Row gutter={16}>
          {heritageSites.map((site) => (
            <Col key={site.id} span={8}>
              <HeritageSiteCard {...site} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;