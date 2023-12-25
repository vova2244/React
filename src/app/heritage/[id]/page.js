"use client"

import React from 'react';
import HeritageSiteDetails from '@/components/HeritageSiteDetails';


const selectedSites = [
    {
      id: 1,
      title: 'Kyiv: Saint-Sophia Cathedral and Related Monastic Buildings, Kyiv-Pechersk Lavra',
      description: 'This property is a masterpiece of the creative genius...',
      imageSrc: '/images/kyiv.jpg',
    },
  ];

const HeritageSitePage = ({ params }) => {
  const heritageSite = selectedSites.find((site) => site.id === parseInt(params.id, 10));

  if (!heritageSite) {
    return <div>Heritage Site not found</div>;
  }

  return (
    <div>
      <div style={{ padding: 16 }}>
        <HeritageSiteDetails {...heritageSite} />
      </div>
    </div>
  );
};

export default HeritageSitePage;