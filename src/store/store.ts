import { configureStore } from "@reduxjs/toolkit";
import TrendSlice from "@/features/Trend/TrendSlice";
import MarketSlice from "@/features/Market/MarketSlice";

export const store = configureStore({
  reducer: {
    trend: TrendSlice,
    market: MarketSlice,
  },
});
