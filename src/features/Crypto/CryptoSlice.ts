import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "@/constants";
import axios from "axios";

const initialState: {
  data: any[];
  loading: boolean;
  error: string | null;
} = {
  data: [],
  loading: false,
  error: null,
};

export const fetchById = createAsyncThunk("fetchById", async (id: string) => {
  const { data } = await axios.get(`${API_URL}/coins/${id}`);
  return data;
});

const cryptoSlice = createSlice({
  name: "Crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An Error Occured";
      });
  },
});

export default cryptoSlice.reducer;
