import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "@/constants";
import axios from "axios";
import { IMarketState } from "@/types";

export const fetchMarketData = createAsyncThunk("fetchMarketData", async () => {
  const { data } = await axios.get(
    `${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
  );
  return data;
});

const initialState: IMarketState = {
  data: [],
  loading: false,
  error: null,
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarketData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMarketData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMarketData.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
        state.error = action.error.message || "An error occured.";
      });
  },
});

export default marketSlice.reducer;
