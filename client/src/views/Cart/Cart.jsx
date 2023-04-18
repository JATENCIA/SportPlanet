import React from "react";
import CartItem from "./CartItem/CartItem";
import CartTotal from "../../Components/CartTotal";
import { useNavigate } from "react-router-dom";

import {
  removeAllCart,
  removeOneCart,
  removeItemCart,
  clearCart,
  getAllProduct,
  shop,
  addToCart,
  getAllUser,
} from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./Cart.module.css";
import { NavBar } from "../../Components/Navbar";
import FilterNavBar from "../../Components/FilterNavBar/FilterNavBar";
import { BiShoppingBag } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const [bPay, setBPay] = useState("");
  const [brand, setBrand] = useState(0);
  const cart = useSelector((state) => state.shoppingCart);
  const pay = useSelector((state) => state.buttonPay);

  useEffect(() => {
    setBPay(pay);
  }, [pay]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(JSON.stringify(cart)));
  }, [cart]);

  const storedValue = window.localStorage.getItem("cart");
  let value = JSON.parse(storedValue);

  let discount = 0;
  let shippingCost = 0;
  cart?.map((elem) => {
    let preciDiscount = elem.price * (1 - elem.discount / 100);
    discount += elem.quantity * (elem.price - preciDiscount);
    shippingCost += elem.price * elem.quantity;
  });

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

  const delFromCart = (id, color, size, UUID, all = false) => {
    if (all) {
      dispatch(removeAllCart(id));
    } else {
      dispatch(removeOneCart(id, color, size, UUID));
    }
  };

  const clearCartShop = () => {
    dispatch(clearCart());
  };

  const adToCart = (id) => {
    dispatch(addToCart(id));
  };

  const removeItem = (id, color, size) => {
    dispatch(removeItemCart(id, color, size));
  };

  const handleShop = async () => {
    if (isAuthenticated) {
      if (userE.baneado === false) {
        if (cart.length) {
          dispatch(shop(cart));
          setBrand(1);
        } else {
          Swal.fire(`NO PRODUCT SELECTED`);
        }
      } else {
        Swal.fire(`🚫 BANNED USER`);
      }
    } else {
      await Swal.fire(`⚠️ LOG IN`);
      navigate("/home");
    }
  };

  const handleClear = () => {
    setBrand(0);
    dispatch(clearCart());
    navigate("/home");
  };

  return (
    <div className={style.main}>
      <NavBar />
      <FilterNavBar />
      <div className={style.mainTitle}>
        <i className={style.bagIcon}>
          <BiShoppingBag />
        </i>
        <h1 className={style.cartTitle}>MY CART</h1>
      </div>
      <div className={style.flexContainer}>
        <article className={style.cartContainer}>
          <div className={style.cardContainer}>
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
                  discount={e.discount}
                  UUID={e.UUID}
                  delFromCart={delFromCart}
                  addItem={adToCart}
                  removeItem={removeItem}
                />
              );
            })}
          </div>
        </article>
        <div className={style.secondContainer}>
          <div className={style.paymentContainer}>
            <div className={style.codeContainer}>
              <input
                type="text"
                className={style.inputCode}
                placeholder="Enter Code"
              />
              <button className={style.buttonSubmit}>Submit</button>
            </div>
            <div className={style.detailsContainer}>
              <h2 className={style.detailTitle}>Details Summary</h2>
              <div className={style.detail}>
                <span>Shipping Cost</span>
                <span>$ {shippingCost.toFixed(2)}</span>
              </div>
              <div className={style.detail}>
                <span>Discount</span>
                <span>-$ {parseFloat(discount.toFixed(2))}</span>
              </div>
              <div className={style.detail}>
                <span>Taxes</span>
                <span style={{ color: "green" }}>N/A</span>
              </div>
              <hr />
              <CartTotal />
              <hr />
            </div>
            <button className={style.buttonPay} onClick={() => handleShop()}>
              CHECKOUT
            </button>
            {brand !== 0 ? (
              <a href={bPay} target="_blank">
                {" "}
                <button
                  className={style.buttonPay2}
                  onClick={() => handleClear()}
                >
                  GO PAY
                </button>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
