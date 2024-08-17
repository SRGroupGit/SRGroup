import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://admin.sreddygroup.com/api/collections/residential';

const initialState = {
  data: {},
  loading: true,
  error: false,
  errorMessage: '',
};

export const fetchResidential = createAsyncThunk(
  'residential/fetchResidential',
  async (slug) => {
    const response = await axios.get(`${url}/records/${slug}`);
    return response.data;
  }
);

const residentialSlice = createSlice({
  name: 'residential',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResidential.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchResidential.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchResidential.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.error.message;
    });
  },
});

export default residentialSlice.reducer;
