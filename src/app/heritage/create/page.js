"use client"

import React from 'react';
import HeritageSiteForm from '@/components/HeritageSiteForm';
import { useDispatch } from 'react-redux';
import { addHeritageSite } from '@/redux/heritageSlice';
import useCreateHeritageSite from '@/hooks/useCreateHeritageSite';

const CreateHeritageSitePage = () => {
  const dispatch = useDispatch();
  const { isFormVisible, showForm } = useCreateHeritageSite();

  const onSubmit = (data) => {
    dispatch(addHeritageSite(data));
  };

  return (
    <div>
      <div style={{ padding: 16 }}>
          <div>
            <HeritageSiteForm onSubmit={onSubmit} />
          </div>
      </div>
    </div>
  );
};

export default CreateHeritageSitePage;