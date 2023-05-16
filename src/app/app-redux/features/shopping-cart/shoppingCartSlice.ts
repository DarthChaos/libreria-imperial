"use client";

import { createSlice } from "@reduxjs/toolkit";
import { shoppingCartState } from "./shoppingCart";

const initialCartState = { items: [], total: 0 };
const initialState: shoppingCartState = {
  cart: initialCartState,
  status: "idle",
  error: null,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    loadValues: (_state, action) => ({ ...action.payload }),
    addNewItem: ({ cart: { items, total, ...cart }, ...state }, action) => ({
      ...state,
      cart: {
        ...cart,
        items: [...items, action.payload],
        total: total + action.payload.tPrice,
      },
    }),
    removeItem: ({ cart: { items, total, ...cart }, ...state }, action) => ({
      cart: {
        ...cart,
        total: total - items[action.payload].tPrice,
        items: items.filter((_it, id) => id !== action.payload),
      },
      ...state,
    }),
    changeObservation: (
      { cart: { observation, ...cart }, ...state },
      action,
    ) => ({ cart: { ...cart, observation: action.payload }, ...state }),
    checkingOut: (state) => ({ ...state, cart: initialCartState }),
  },
});

export const { loadValues } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
