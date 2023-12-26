import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  heritageSites: [],
};

export const heritageSlice = createSlice({
  name: 'heritage',
  initialState,
  reducers: {
    addHeritageSite: (state, action) => {
      state.heritageSites.push(action.payload);
    },
  },
});

export const { addHeritageSite } = heritageSlice.actions;

export const selectHeritageSites = (state) => state.heritage.heritageSites;

export default heritageSlice.reducer;