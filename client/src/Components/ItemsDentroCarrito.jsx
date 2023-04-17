import React from "react";
import { useSelector } from "react-redux";
import styled from "./ItemsDentroCarrito.module.css";
import { useAuth0 } from "@auth0/auth0-react";

function ItemsDentroCarrito() {
  const cart = useSelector((state) => state.shoppingCart);
  const { isAuthenticated, user, logout } = useAuth0();
  const itemsCarrito = cart.reduce((acc, el) => acc + el.quantity, 0);

  return (
    <div className={styled.border}>
      <span className={styled.items}>
        {itemsCarrito !== 0
          ? user && isAuthenticated
            ? itemsCarrito
            : null
          : null}
      </span>
    </div>
  );
}

export default ItemsDentroCarrito;
