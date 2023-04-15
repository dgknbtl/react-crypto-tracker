import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "@/constants";
import axios from "axios";

interface IState {
  data: any[];
}

const initialState: IState = {
  data: [],
};

// fetch trend market data
export const fetchTrendData = createAsyncThunk("fetchTrendData", async () => {
  const { data } = await axios.get(`${API_URL}/search/trending`);
  return data;
});

const trendSlice = createSlice({
  name: "trend",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrendData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default trendSlice.reducer;
