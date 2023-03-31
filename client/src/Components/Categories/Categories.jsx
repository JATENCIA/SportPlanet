import React from "react";
import style from "./Categories.module.css";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className={style.containerName}>
      <div>
        <h2 className={style.Name}>Product Categories</h2>
      </div>
      <div className={style.cointainer}>
        <Link className={style.TShirtsContainer} to="/home/categories/tShirts">
          <div className={style.names}>T-Shirts</div>
        </Link>
        <Link className={style.PantsContainer} to="/category/pants">
          <div className={style.names}>Pants</div>
        </Link>
        <Link className={style.ShoesContainer} to="/home/categories/shoes">
          <div className={style.names}>Shoes</div>
        </Link>
        <div className={style.cointainer}>
          <Link className={style.BallsContainer} to="/home/categories/balls">
            <div className={style.names}>Balls</div>
          </Link>
          <Link
            className={style.SupplementsContainer}
            to="/home/categories/supplements"
          >
            <div className={style.names}>Supplements</div>
          </Link>
          <Link
            className={style.AccessoriesContainer}
            to="/home/categories/accesories"
          >
            <div className={style.names}>Accessories</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
