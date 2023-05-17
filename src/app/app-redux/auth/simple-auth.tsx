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
    signIn: () => ({ isLogged: true }),
    signOut: () => ({ isLogged: false }),
  },
});
