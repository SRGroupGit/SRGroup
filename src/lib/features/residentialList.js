import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://sendoff.wtf/api';

const initialState = {
  data: [],
  loading: true,
  error: false,
  errorMessage: '',
};

export const fetchresidentialList = createAsyncThunk(
  'residentialList/fetchresidentialList',
  async () => {
    const response = await axios.get(`${url}/collections/residential/records`);
    return response.data;
  }
);

const residentialListSlice = createSlice({
  name: 'residentialList',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchresidentialList.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchresidentialList.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchresidentialList.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.error.message;
    },
  },
});

export default residentialListSlice;
