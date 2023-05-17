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
    addNewItem: ({ cart: { items, total, ...cart }, ...state }, action) => {
      console.log(items);
      const newState = {
        ...state,
        cart: {
          ...cart,
          items: [...items, action.payload],
          total: total + action.payload.tPrice,
        },
      };

      uploadToStorage(newState);

      return newState;
    },
    removeItem: ({ cart: { items, total, ...cart }, ...state }, action) => {
      const newState = {
        cart: {
          ...cart,
          total: total - items[action.payload].tPrice,
          items: items.filter((_it, id) => id !== action.payload),
        },
        ...state,
      };

      uploadToStorage(newState);

      return newState;
    },
    changeObservation: (
      { cart: { observation, ...cart }, ...state },
      action,
    ) => {
      const newState = {
        cart: { ...cart, observation: action.payload },
        ...state,
      };

      uploadToStorage(newState);

      return newState;
    },
    // changeSingleSubTotal: ({ ...state }, action) => {
    //   // const itemToChange = items[action.payload.id];
    //   console.log(state);

    //   // itemToChange.tPrice = itemToChange.uPrice * action.payload.number;

    //   // const newState = { cart: { items, ...cart }, ...state };

    //   // uploadToStorage(newState);

    //   // return newState;
    //   return { ...state };
    // },
    checkingOut: (state) => {
      uploadToStorage(null);

      return { ...state, cart: initialCartState };
    },
  },
});

const uploadToStorage = (items: shoppingCartState | null) => {
  if (items) localStorage.setItem("shoppingCartItems", JSON.stringify(items));
  else localStorage.removeItem("shoppingCartItems");
};

export const loadFromStorage = () => {
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
  // changeSingleSubTotal,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
