import { configureStore } from '@reduxjs/toolkit';
import commercialListSlice from './features/commercialList';
import residentialListSlice from './features/residentialList';

export const store = () => {
  return configureStore({
    reducer: {
      commercialList: commercialListSlice,
      residentialList: residentialListSlice,
    },
  });
};
