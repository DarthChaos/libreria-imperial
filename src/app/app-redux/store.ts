"use client";

import { configureStore } from "@reduxjs/toolkit";
import comicSlice from "./features/comics/single/comicSlice";
import comicsSlice from "./features/comics/multiple/comicsSlice";
import eventSlice from "./features/events/single/eventSlice";
import eventsSlice from "./features/events/multiple/eventsSlice";

export const store = configureStore({
  reducer: {
    comic: comicSlice,
    comics: comicsSlice,
    event: eventSlice,
    events: eventsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
