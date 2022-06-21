import React from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemtoCartHandler = () => {};

  const removeItemFromCartHandler = () => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemtoCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext value={cartContext}>{props.children}</CartContext>;
};

export default CartProvider;
