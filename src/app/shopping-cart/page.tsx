"use client";

import BreadCrumb from "@/components/breadcrumb";
import BlackContainer from "@/components/containers/black-container";
import React, { useEffect } from "react";
import Summary from "./summary";
import CartHeader from "./cart-header";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app-redux/store";
import CartItems from "./cart-items";
import {
  loadFromStorage,
  loadValues,
} from "../app-redux/features/shopping-cart/shoppingCartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const {
    cart: { items, total, observation },
    status: comicStatus,
  } = useSelector((state: RootState) => state.shoppingCart);

  const crumbs = [{ label: "Home", value: "/" }, { label: "Shopping Cart" }];

  useEffect(() => {
    const data = loadFromStorage();

    if (data) dispatch(loadValues(data));
  }, [dispatch]);

  return (
    <>
      <BreadCrumb {...{ crumbs }} />
      <BlackContainer>
        <CartHeader />
        <CartItems {...{ items }} />
        <Summary {...{ total }} />
      </BlackContainer>
    </>
  );
};

export default ShoppingCart;
