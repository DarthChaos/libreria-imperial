"use client";

import { createSlice } from "@reduxjs/toolkit";
import { shoppingCartItem, shoppingCartState } from "./shoppingCart";

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

const uploadToStorage = (items: shoppingCartItem[]) => {
  localStorage.setItem("shoppingCartItems", JSON.stringify(items));
};

const loadFromStorage = () => {
  const itemsFromStorage = localStorage.getItem("shoppingCartItems");

  if (itemsFromStorage) {
    return JSON.parse(itemsFromStorage);
  }

  return null;
};

export const {
  loadValues,
  addNewItem,
  changeObservation,
  checkingOut,
  removeItem,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
