"use client"

import React from 'react';
import { Typography, Row, Col } from 'antd';
import HeritageSiteCard from '../components/HeritageSiteCard';
import Header from '../components/Header';
import useHeritageSites from '../hooks/useHeritageSites';

const { Title } = Typography;

const heritageSites = [
  {
    id: 1,
    title: 'Kyiv: Saint-Sophia Cathedral and Related Monastic Buildings, Kyiv-Pechersk Lavra',
    description: 'This property is a masterpiece of the creative genius...',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/80-391-0151_Kyiv_St.Sophia%27s_Cathedral_RB_18_2_%28cropped%29.jpg/800px-80-391-0151_Kyiv_St.Sophia%27s_Cathedral_RB_18_2_%28cropped%29.jpg',
  },
];

const HomePage = () => {
  const { selectedSites, handleSave } = useHeritageSites();

  return (
    <div>
      <Header />
      <div style={{ padding: 16 }}>
        <Title level={2}>UNESCO Heritage Sites in Ukraine</Title>
        <Row gutter={16}>
          {heritageSites.map((site) => (
            <Col key={site.id} span={8}>
              <HeritageSiteCard {...site} onSave={handleSave} />
            </Col>
          ))}
        </Row>

        <Title level={3} style={{ marginTop: 16 }}>Saved Heritage Sites</Title>
        <Row gutter={16}>
          {selectedSites.map((site) => (
            <Col key={site.id} span={8}>
              <HeritageSiteCard {...site} onSave={handleSave} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
