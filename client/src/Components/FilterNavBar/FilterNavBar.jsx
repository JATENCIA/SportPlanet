import React from "react";
import { Link } from "react-router-dom";
import style from "./FilterNavBar.module.css";

export default function FilterNavBar() {
  return (
    <div className={style.navContainer}>
      <button>MAN</button>
      <button>WOMAN</button>
      <button>KIDS</button>
      <button>PROMOTIONS</button>
      <Link to="/category/gym">
        <button>FITNESS</button>
      </Link>
    </div>
  );
}
