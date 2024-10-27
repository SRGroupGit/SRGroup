import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://admin.sreddygroup.com/api/collections/commercial';

const initialState = {
  data: {},
  loading: true,
  error: false,
  errorMessage: '',
};

export const fetchCommercial = createAsyncThunk(
  'commercial/fetchCommercial',
  async (slug) => {
    const response = await axios.get(`${url}/records?filter=(slug='${slug}')`);
    return response.data.items[0];
  }
);

const commercialSlice = createSlice({
  name: 'commercial',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommercial.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchCommercial.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchCommercial.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.error.message;
    });
  },
});

export default commercialSlice.reducer;
