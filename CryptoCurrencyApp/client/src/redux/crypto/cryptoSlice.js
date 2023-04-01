import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencies: [],
  isLoading: true,
  message: "",
  filtered: {
    name: "",
  },
  isDarkMode: localStorage.getItem("isDarkMode")
    ? JSON.parse(localStorage.getItem("isDarkMode"))
    : false,
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setCurrencies: (state, action) => {
      state.currencies = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setFiltered: (state, action) => {
      state.filtered = action.payload;
    },
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
      localStorage.setItem("isDarkMode", state.isDarkMode);
    },
  },
});

export const {
  setCurrencies,
  setIsLoading,
  setMessage,
  setFiltered,
  setIsDarkMode,
} = cryptoSlice.actions;

export default cryptoSlice.reducer;
