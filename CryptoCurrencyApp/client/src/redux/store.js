import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "./crypto/cryptoSlice";

export const store = configureStore({
  reducer: {
    crypto: cryptoSlice,
  },
});
