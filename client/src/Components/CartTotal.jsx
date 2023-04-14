import React from "react";
import { useSelector } from "react-redux";
import style from "./CartTotal.module.css";

function CartTotal() {
  const cart = useSelector((state) => state.shoppingCart);
  const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);

  return (
    <div className={style.total}>
      <span>Estimated Total</span>
      <span>${total}</span>
    </div>
  );
}

export default CartTotal;
