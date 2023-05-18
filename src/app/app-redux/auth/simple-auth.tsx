"use client";

import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "./auth";

const initialState: Auth = {
  isLogged: false,
};

const uploadLog = ({ isLogged }: Auth) => {
  if (isLogged) localStorage.setItem("isLogged", isLogged.toString());
  else localStorage.removeItem("isLogged");
};

export const downloadLog = () => {
  const isLogged = localStorage.getItem("isLogged");

  if (isLogged) {
    return isLogged === "true";
  }

  return null;
};

export const simpleAuth = createSlice({
  name: "simple-auth",
  initialState,
  reducers: {
    loadValues: (_state, action) => ({ ...action.payload }),
    signIn: (_state, action) => ({ isLogged: true, user: action.payload }),
    signOut: () => ({ isLogged: false }),
  },
});

export const { signIn, signOut, loadValues } = simpleAuth.actions;

export default simpleAuth.reducer;
