import BreadCrumb from "@/components/breadcrumb";
import BlackContainer from "@/components/containers/black-container";
import Image from "next/image";
import React from "react";
import CartItem from "./cart-item";
import Button from "@/components/button/button";
import TextArea from "@/components/input/textarea";
import Summary from "./summary";
import CartHeader from "./cart-header";

const ShoppingCart = () => {
  const crumbs = [{ label: "Home", value: "/" }, { label: "Shopping Cart" }];

  return (
    <>
      <BreadCrumb {...{ crumbs }} />
      <BlackContainer>
        <CartHeader />
        <CartItem />
        <CartItem />
        <Summary />
      </BlackContainer>
    </>
  );
};

export default ShoppingCart;
