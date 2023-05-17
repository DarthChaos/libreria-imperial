import React, { memo } from "react";
import { shoppingCartItem } from "../app-redux/features/shopping-cart/shoppingCart";
import CartItem from "./cart-item";
import { v4 } from "uuid";

type CartItemsProps = {
  items: shoppingCartItem[];
};

const CartItems = ({ items }: CartItemsProps) => {
  const cartItems = items.map(({ img, name, tPrice, uPrice }, id) => {
    const uid = v4();

    return (
      <CartItem
        key={`cart-item-${uid}`}
        {...{ id, img, name, tPrice, uPrice }}
      />
    );
  });

  return <>{cartItems}</>;
};

export default memo(CartItems);
