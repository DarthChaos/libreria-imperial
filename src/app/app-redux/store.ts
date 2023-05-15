"use client";

import { configureStore } from "@reduxjs/toolkit";
import comicSlice from "./features/comics/single/comicSlice";
import comicsSlice from "./features/comics/multiple/comicsSlice";

export const store = configureStore({
  reducer: {
    comic: comicSlice,
    comics: comicsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
