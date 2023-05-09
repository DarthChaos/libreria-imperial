"use client";

import { configureStore } from "@reduxjs/toolkit";
import comicSlice from "./features/comics/single/comicSlice";

export const store = configureStore({
  reducer: {
    comic: comicSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
