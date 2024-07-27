import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://sendoff.wtf/api';

const initialState = {
  data: [],
  loading: true,
  error: false,
  errorMessage: '',
};

export const fetchResidentialList = createAsyncThunk(
  'residentialList/fetchResidentialList',
  async () => {
    const response = await axios.get(
      `${url}/collections/residential/records?sort=-launch_date`
    );
    return response.data.items;
  }
);

const residentialListSlice = createSlice({
  name: 'residentialList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResidentialList.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchResidentialList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchResidentialList.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.error.message;
    });
  },
});

export default residentialListSlice.reducer;
