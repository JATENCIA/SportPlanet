import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSearchedProducts } from "../../redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import style from "./navBar.module.css";
import { MdSell } from "react-icons/md";
import ItemsDentroCarrito from "../ItemsDentroCarrito";
import { useAuth0 } from "@auth0/auth0-react";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState("");
  const { isAuthenticated, user, logout } = useAuth0();

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
            src="https://lh3.googleusercontent.com/5eEGb8y-_1ZO7xY3dbfn9i2yniw4k-dL92ApzpC6a8_yIa9C438N2XmmKLee3wWDiu5VK9EoZXR1eIf6MuqjoBvGuMoaBzu89s9ph568"
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

        <Link to="/cart">
          <ItemsDentroCarrito />
          <div className={style.cartContainer}>
            <button className={style.carrito}>
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
