import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: true,
  error: false,
  errorMessage: '',
};

export const fetchCommercialList = createAsyncThunk(
  'commercialList/fetchCommercialList',
  async () => {
    const response = await axios.get('https://api.example.com/commercial');
    return response.data;
  }
);

const commercialListSlice = createSlice({
  name: 'commercialList',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCommercialList.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchCommercialList.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchCommercialList.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.error.message;
    },
  },
});

export default commercialListSlice;
