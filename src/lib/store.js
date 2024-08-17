import { configureStore } from '@reduxjs/toolkit';
import commercialListSlice from './features/commercialList';
import residentialListSlice from './features/residentialList';
import commercialSlice from './features/commercial';
import residentialSlice from './features/residential';

export const store = () => {
  return configureStore({
    reducer: {
      commercialList: commercialListSlice,
      residentialList: residentialListSlice,
      commercial: commercialSlice,
      residential: residentialSlice,
    },
  });
};
