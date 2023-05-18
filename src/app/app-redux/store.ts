"use client";

import { configureStore } from "@reduxjs/toolkit";
import comicSlice from "./features/comics/single/comicSlice";
import comicsSlice from "./features/comics/multiple/comicsSlice";
import eventSlice from "./features/events/single/eventSlice";
import eventsSlice from "./features/events/multiple/eventsSlice";
import charactersSlice from "./features/characters/charactersSlice";
import shoppingCartSlice from "./features/shopping-cart/shoppingCartSlice";
import simpleAuth from "./auth/simple-auth";
import spinnerSlice from "./features/spinner/spinnerSlice";

export const store = configureStore({
  reducer: {
    comic: comicSlice,
    comics: comicsSlice,
    event: eventSlice,
    events: eventsSlice,
    character: charactersSlice,
    shoppingCart: shoppingCartSlice,
    auth: simpleAuth,
    spinner: spinnerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
