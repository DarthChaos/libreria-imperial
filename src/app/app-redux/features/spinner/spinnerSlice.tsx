"use client";

import { createSlice } from "@reduxjs/toolkit";

type Spinner = {
  isLoading: boolean;
};

const initialState: Spinner = {
  isLoading: false,
};

export const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    toggleSpinner: (state) => ({ isLoading: !state.isLoading }),
  },
});

export const { toggleSpinner } = spinnerSlice.actions;

export default spinnerSlice.reducer;
