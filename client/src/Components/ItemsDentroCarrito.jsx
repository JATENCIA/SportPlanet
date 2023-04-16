import React from "react";
import { useSelector } from "react-redux";
import styled from "./ItemsDentroCarrito.module.css";

function ItemsDentroCarrito() {
  const cart = useSelector((state) => state.shoppingCart);

  const itemsCarrito = cart.reduce((acc, el) => acc + el.quantity, 0);

  return (
    <div className={styled.border}>
      <span className={styled.items}>
        {itemsCarrito !== 0 ? itemsCarrito : null}
      </span>
    </div>
  );
}

export default ItemsDentroCarrito;
