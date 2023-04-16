import React from "react";
import { useSelector } from "react-redux";
import styled from "./CartTotal.module.css";

function CartTotal() {
  const cart = useSelector((state) => state.shoppingCart);
  let total = 0;
  cart?.map((elem) => {
    let price2 = elem.price * elem.quantity;
    total += price2 - (price2 * elem.discount) / 100;
  });

  return (
    <div className={styled.backg}>
      <h1 className={styled.total}>Total : $ {total.toFixed(2)} </h1>
    </div>
  );
}

export default CartTotal;
