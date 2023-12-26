import { configureStore } from '@reduxjs/toolkit';
import heritageReducer from './heritageSlice';

const store = configureStore({
  reducer: {
    heritage: heritageReducer,
    auth: authReducer,
  },
});

export default store;