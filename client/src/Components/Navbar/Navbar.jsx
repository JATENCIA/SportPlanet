import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUser, getSearchedProducts } from "../../redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import style from "./navBar.module.css";
import { MdSell } from "react-icons/md";
import ItemsDentroCarrito from "../ItemsDentroCarrito";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState("");
  const { isAuthenticated, user, logout } = useAuth0();

  const [userE, setUserE] = useState({});

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

  const enterCart = () => {
    if (isAuthenticated) {
      if (userE.baneado === false) {
        navigate("/cart");
      } else {
        Swal.fire(`🚫 BANNED USER`);
      }
    } else {
      Swal.fire(`⚠️ LOG IN`);
    }
  };

  return (
    <div className={style.navContainer}>
      <div className={style.logo}>
        <Link to="/home">
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/441/985/original/world-map-on-the-foot-ball-silhouette-for-icon-symbol-pictogram-sport-news-art-illustration-apps-website-or-graphic-design-element-format-png.png"
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
        {/* <Link to="/cart"> */}
        <div className={style.cartContainer}>
          <button className={style.carrito} onClick={() => enterCart()}>
            <i className="fas fa-shopping-cart"></i>
          </button>
          <ItemsDentroCarrito />
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};
