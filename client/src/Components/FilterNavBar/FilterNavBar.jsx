import React from "react";
import { Link } from "react-router-dom";
import style from "./FilterNavBar.module.css";

export default function FilterNavBar() {
  return (
    <div className={style.navContainer}>
      <div className={style.dropdown}>
        <button>CATEGORIES</button>
        <div className={style.dropdownContent}>
          <div className={style.boton}>
            <Link to="/category/tShirts">TSHIRTS</Link>
          </div>
          <div className={style.boton}>
            <Link to="/category/pants">PANTS</Link>
          </div>
          <div className={style.boton}>
            <Link to="/category/shoes">SHOES</Link>
          </div>
          <div className={style.boton}>
            <Link to="/category/balls">BALLS</Link>
          </div>
          <div className={style.boton}>
            <Link to="/category/supplements">SUPPLEMENTS</Link>
          </div>
          <div className={style.boton}>
            <Link to="/category/accessories">ACCESSORIES</Link>
          </div>
        </div>
      </div>
      <div className={style.dropdown}>
        <button>BRANDS</button>
        <div className={style.dropdownContent}>
          <div className={style.boton}>
            <Link to="/category/nike">NIKE</Link>
          </div>
          <div className={style.boton}>
            <Link to="/category/adidas">ADIDAS</Link>
          </div>
          <div className={style.boton}>
            <Link to="/category/puma">PUMA</Link>
          </div>
          <div className={style.boton}>
            <Link to="/category/under-armour">UNDER-ARMOUR</Link>
          </div>
          <div className={style.boton}>
            <Link to="/category/fila">FILA</Link>
          </div>
          <div className={style.boton}>
            <Link to="/category/reebok">REEBOK</Link>
          </div>
        </div>
      </div>
      <Link to="/category/man">
        <button>MEN</button>
      </Link>
      <Link to="/category/woman">
        <button>WOMEN</button>
      </Link>
      <Link to="/category/promotions">
        <button>PROMOTIONS</button>
      </Link>
      <Link to="/category/gym">
        <button>GYM</button>
      </Link>
    </div>
  );
}
