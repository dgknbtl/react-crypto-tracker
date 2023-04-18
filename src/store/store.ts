import { configureStore } from "@reduxjs/toolkit";
import TrendSlice from "@/features/Trend/TrendSlice";
import MarketSlice from "@/features/Market/MarketSlice";
import CryptoSlice from "@/features/Crypto/CryptoSlice";

export const store = configureStore({
  reducer: {
    trend: TrendSlice,
    market: MarketSlice,
    crypto: CryptoSlice,
  },
});
