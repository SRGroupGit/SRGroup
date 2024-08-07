import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://admin.sreddygroup.com/api';

const initialState = {
  data: [],
  loading: true,
  error: false,
  errorMessage: '',
};

export const fetchCommercialList = createAsyncThunk(
  'commercialList/fetchCommercialList',
  async () => {
    const response = await axios.get(
      `${url}/collections/commercial/records?sort=-launch_date`
    );
    return response.data.items;
  }
);

const commercialListSlice = createSlice({
  name: 'commercialList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommercialList.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchCommercialList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchCommercialList.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.error.message;
    });
  },
});

export default commercialListSlice.reducer;
