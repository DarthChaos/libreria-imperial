"use client";

import BreadCrumb from "@/components/breadcrumb";
import BlackContainer from "@/components/containers/black-container";
import React from "react";
import Summary from "./summary";
import CartHeader from "./cart-header";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app-redux/store";
import CartItems from "./cart-items";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const {
    cart: { items, total, observation },
    status: comicStatus,
  } = useSelector((state: RootState) => state.shoppingCart);

  const crumbs = [{ label: "Home", value: "/" }, { label: "Shopping Cart" }];

  return (
    <>
      <BreadCrumb {...{ crumbs }} />
      <BlackContainer>
        <CartHeader />
        <CartItems {...{ items }} />
        <Summary />
      </BlackContainer>
    </>
  );
};

export default ShoppingCart;
