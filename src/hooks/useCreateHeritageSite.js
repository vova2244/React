"use client"

import { useState } from 'react';

const useCreateHeritageSite = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  return {
    isFormVisible,
    showForm,
    hideForm,
  };
};

export default useCreateHeritageSite;