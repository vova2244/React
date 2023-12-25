"use client"

import { useState } from 'react';

const useHeritageSites = () => {
  const [selectedSites, setSelectedSites] = useState([]);

  const handleSave = (site) => {
    setSelectedSites((prevSelectedSites) => [...prevSelectedSites, site]);
  };

  return {
    selectedSites,
    handleSave,
  };
};

export default useHeritageSites;