import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSearchedProducts } from "../../redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import style from "./navBar.module.css";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState("");

  const changeHandler = (e) => {
    setProduct(e.target.value);
  };

  const searchHandler = () => {
    dispatch(getSearchedProducts(product));
    setProduct("");
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      searchHandler();
      navigate(`/products/${product}`);
    }
  };

  return (
    <div className={style.navContainer}>
      <div className={style.logo}>
        <Link to="/home">
          <img
            src="https://i.postimg.cc/kGPCgB7C/logo.png"
            alt="logo"
            className={style.img}
          />
        </Link>
      </div>

      <div className={style.searchDiv}>
        <input
          type="search"
          value={product}
          onChange={changeHandler}
          className={style.inputSearch}
          placeholder="What are you looking for?"
          onKeyDown={enterHandler}
        />
        <Link to={`/products/${product}`}>
          <button
            type="submit"
            className={style.btnSearch}
            onClick={searchHandler}
          >
            <i className="fas fa-search" />
          </button>
        </Link>
      </div>

      <div className={style.divUserContainer}>
        <div className={style.divLogin}>
          <Login />
        </div>

        <div className={style.cartContainer}>
          <button className={style.carrito}>
            <i className="fas fa-shopping-cart"></i>
            <span className={style.cartSpan}>MY CART</span>
          </button>
        </div>

        <div className={style.sellContainer}>
          <Link to="/post/product">
            <button className={style.sellButton}>SELL</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
