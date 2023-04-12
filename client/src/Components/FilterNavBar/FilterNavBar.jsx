import React from 'react';
import { Link } from "react-router-dom";
import style from "./FilterNavBar.module.css";


export default function FilterNavBar() {



  return (
      <div className={style.navContainer}>
      <Link to="/category/men">
      <button>MAN</button>
      </Link>
      <Link to="/category/women">
      <button>WOMAN</button>
      </Link>
      <Link to="/category/kids">
      <button>KIDS</button>
      </Link>
      <Link to="/category/promotions">
      <button>PROMOTIONS</button>
      </Link>
     

      <div className={style.dropdown}>
        <button >CATEGORIES</button>
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
            <Link to="/brand/nike">NIKE</Link>
            </div>
            <div className={style.boton}>
            <Link to="/brand/adidas">ADIDAS</Link>
            </div>
            <div className={style.boton}>
            <Link to="/brand/puma">PUMA</Link>
            </div>
            <div className={style.boton}>
            <Link to="/brand/under-armour">UNDER ARMOUR</Link>
            </div>
            <div className={style.boton}>
            <Link to="/brand/fila">FILA</Link>
            </div>
            <div className={style.boton}>
            <Link to="/brand/reebok">REEBOK</Link>
            </div>
    </div>
    </div>
    </div>
  );
}
