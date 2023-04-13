import React from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
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
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

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

  const handleShop = () => {
    dispatch(shop(cart));
    dispatch(clearCart());
  };

  const adToCart = (id) => {
    dispatch(addToCart(id));
  };

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
        {cart.map((e) => {
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
