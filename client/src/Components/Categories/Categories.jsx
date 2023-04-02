import React from "react";
import style from "./Categories.module.css";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className={style.containerName}>
      <div>
        <h2 className={style.Name}>Product Categories</h2>
      </div>
      <div className={style.container}>
        <Link className={style.CategoryContainer} to="/category/tShirts">
          <div className={style.names}>T-Shirts</div>
        </Link>
        <Link className={style.CategoryContainer} to="/category/pants">
          <div className={style.names}>Pants</div>
        </Link>
        <Link className={style.CategoryContainer} to="/category/shoes">
          <div className={style.names}>Shoes</div>
        </Link>
        <div className={style.container}>
          <Link className={style.CategoryContainer} to="/category/balls">
            <div className={style.names}>Balls</div>
          </Link>
          <Link
            className={style.CategoryContainer}
            to="/category/supplements"
          >
            <div className={style.names}>Supplements</div>
          </Link>
          <Link
            className={style.CategoryContainer}
            to="/category/accessories"
          >
            <div className={style.names}>Accessories</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
