"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface RoleNameElement {
  role: string;
  name: string;
}
export interface NameElement {
  name: string;
}
export interface ComicState {
  title: string;
  image: string;
  update: string;
  desc: string;
  price: string;
  credits: RoleNameElement[];
  characters: NameElement[];
  cover: RoleNameElement[];
}

const initialState: ComicState = {
  title: "",
  image: "",
  update: "",
  desc: "",
  price: "",
  credits: [],
  characters: [],
  cover: [],
};

export const comicSlice = createSlice({
  name: "comic",
  initialState,
  reducers: {
    loadValues: (_state, action) => ({ ...action.payload }),
  },
});

export const { loadValues } = comicSlice.actions;

export default comicSlice.reducer;
