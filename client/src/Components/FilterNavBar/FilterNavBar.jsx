import React from "react";
import style from "./FilterNavBar.module.css";

export default function FilterNavBar() {
  return (
    <div className={style.navContainer}>
      <button>MAN</button>
      <button>WOMAN</button>
      <button>KIDS</button>
      <button>PROMOTIONS</button>
      <button>AUTUMN</button>
    </div>
  );
}
