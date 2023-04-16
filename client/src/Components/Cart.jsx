import React, { useState } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { getAllUser } from "../redux/Actions";
import Login from "../Components/Navbar/Login";
import { useNavigate } from "react-router-dom";

import {
  removeAllCart,
  removeOneCart,
  clearCart,
  getAllProduct,
  shop,
  addToCart,
} from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "./Cart.module.css";
import { Link, Navigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const navigete = useNavigate();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch(removeAllCart(id));
    } else {
      dispatch(removeOneCart(id));
    }
  };

  const clearCartShop = () => {
    dispatch(clearCart());
  };

  const handleShop = async () => {
    if (isAuthenticated) {
      if (userE.baneado === false) {
        dispatch(shop(cart));
        dispatch(clearCart());
      } else {
        Swal.fire(`🚫 BANNED USER`);
      }
    } else {
      await Swal.fire(`⚠️ LOG IN`);
      navigete("/home");
    }
  };

  const adToCart = (product) => {
    dispatch(addToCart(product));
  };

  const [userE, setUserE] = useState({});
  const { isAuthenticated, user, logout } = useAuth0();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    if (user && isAuthenticated) {
      const userDb = allUsers?.find((element) => element.eMail === user?.email);
      userDb ? setUserE(userDb) : "";
    }
  }, [user]);

  return (
    <div className={styled.main}>
      <br />
      <button className={styled.back} onClick={() => history.back(-2)}>
        Back to Shop
      </button>
      <button className={styled.clean} onClick={() => clearCartShop()}>
        <i className="fa-regular fa-trash-can fa-xl"></i>
      </button>

      <article className={styled.cartitem}>
        {cart?.map((e) => {
          return (
            <CartItem
              key={crypto.randomUUID()}
              productCart={e}
              _id={e.id}
              name={e.name}
              price={e.price}
              quantity={e.quantity}
              stock={e.stock}
              image={e.image}
              size={e.size}
              color={e.color}
              delFromCart={delFromCart}
              addItem={adToCart}
            />
          );
        })}

        {/* <button className={styled.clean} onClick={clearCartShop}>Clean Cart</button> */}

        <CartTotal />

        <button className={styled.clean1} onClick={handleShop}>
          Buy now
        </button>
      </article>
    </div>
  );
}

export default Cart;
