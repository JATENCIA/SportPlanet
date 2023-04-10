import React from "react";
import style from "./Categories.module.css";
import { Link } from "react-router-dom";
import pantsLogo from "../../images/pantsLogo.jpg";
import ballsLogo from "../../images/ballsLogo.jpg";
import suplementsLogo from "../../images/suplementsLogo.jpg";
import tshirt from "../../images/tshirt.jpg";
import shoesLogo from "../../images/shoesLogo.jpg";
import accesoriesLogo from "../../images/accesoriesLogo.jpeg";

export default function Categories() {
  return (
    <div className={style.containerName}>
      <h2 className={style.Name}>PRODUCT CATEGORIES</h2>
      <div className={style.container}>
        <Link to="/category/tShirts">
          <div className={style.CategoryContainer}>
            <img src={tshirt} />
            <span className={style.spanCategory}>T-SHIRTS</span>
          </div>
        </Link>
        <Link to="/category/pants">
          <div className={style.CategoryContainer}>
            <img src={pantsLogo} />
            <span className={style.spanCategory}>PANTS</span>
          </div>
        </Link>
        <Link to="/category/shoes">
          <div className={style.CategoryContainer}>
            <img src={shoesLogo} />
            <span className={style.spanCategory}>SHOES</span>
          </div>
        </Link>
        <div className={style.container}>
          <Link to="/category/balls">
            <div className={style.CategoryContainer}>
              <img src={ballsLogo} />
              <span className={style.spanCategory}>BALLS</span>
            </div>
          </Link>
          <Link to="/category/supplements">
            <div className={style.CategoryContainer}>
              <img src={suplementsLogo} />
              <span className={style.spanCategory}>SUPPLEMENTS</span>
            </div>
          </Link>
          <Link to="/category/accessories">
            <div className={style.CategoryContainer}>
              <img src={accesoriesLogo} />
              <span className={style.spanCategory}>ACCESSORIES</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
