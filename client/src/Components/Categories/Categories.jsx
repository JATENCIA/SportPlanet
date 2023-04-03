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
          </div>
        </Link>
        <Link to="/category/pants">
          <div className={style.CategoryContainer}>
            <img src={pantsLogo} />
          </div>
        </Link>
        <Link to="/category/shoes">
          <div className={style.CategoryContainer}>
            <img src={shoesLogo} />
          </div>
        </Link>
        <div className={style.container}>
          <Link to="/category/balls">
            <div className={style.CategoryContainer}>
              <img src={ballsLogo} />
            </div>
          </Link>
          <Link to="/category/supplements">
            <div className={style.CategoryContainer}>
              <img src={suplementsLogo} />
            </div>
          </Link>
          <Link to="/category/accessories">
            <div className={style.CategoryContainer}>
              <img src={accesoriesLogo} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
