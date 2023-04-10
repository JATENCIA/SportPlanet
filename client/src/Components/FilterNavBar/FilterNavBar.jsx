import React from "react";
import { Link } from "react-router-dom";
import style from "./FilterNavBar.module.css";

export default function FilterNavBar() {
  return (
    <div className={style.navContainer}>
      <Link to="/category/man">
      <button>MAN</button>
      </Link>
      <Link to="/category/woman">
      <button>WOMAN</button>
      </Link>
      <Link to="/category/kids">
      <button>KIDS</button>
      </Link>
      <Link to="/category/promotions">
      <button>PROMOTIONS</button>
      </Link>
      <Link to="/category/fitness">
        <button>FITNESS</button>
      </Link>
    </div>
  );
}
