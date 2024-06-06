import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import commercialListSlice from './features/commercialList';
import residentialListSlice from './features/residentialList';

export const store = configureStore({
  reducer: {
    commercialList: commercialListSlice,
    residentialList: residentialListSlice,
  },
});
