import { configureStore } from "@reduxjs/toolkit";
import TrendSlice from "../features/trend/TrendSlice";

export const store = configureStore({
  reducer: {
    trend: TrendSlice,
  },
});
