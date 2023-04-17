import React from "react";
import { useSelector } from "react-redux";
import styled from "./CartTotal.module.css";


function CartTotal() {
  const cart = useSelector((state) => state.shoppingCart);
  const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
 
let discount = 0;
  cart?.map((e)=> {
    discount +=  e.discount;
  })
  

  const totalDiscount = total - total*(discount/100)
  return (

    <div className={styled.backg}>
      <h1 className={styled.total}>Total : ${totalDiscount} </h1>
    </div>
  );
}

export default CartTotal;
