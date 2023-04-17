import React from "react";
import { useSelector } from "react-redux";
import styled from "./ItemsDentroCarrito.module.css";
import { useAuth0 } from "@auth0/auth0-react";
<<<<<<< HEAD


=======
>>>>>>> d54c450e1e931143905e79b4a79bd9c3a8ef07d8

function ItemsDentroCarrito() {
  const { isAuthenticated, user, logout } = useAuth0();
  const cart = useSelector((state) => state.shoppingCart);
  const { isAuthenticated, user, logout } = useAuth0();
  const itemsCarrito = cart.reduce((acc, el) => acc + el.quantity, 0);

  return (
    <div className={styled.border}>
      <span className={styled.items}>
<<<<<<< HEAD
        {itemsCarrito !== 0 ? user && isAuthenticated ? itemsCarrito : null : null}
=======
        {itemsCarrito !== 0
          ? user && isAuthenticated
            ? itemsCarrito
            : null
          : null}
>>>>>>> d54c450e1e931143905e79b4a79bd9c3a8ef07d8
      </span>
    </div>
  );
}

export default ItemsDentroCarrito;
