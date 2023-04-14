import React from "react";
import style from "./Shipping.module.css";

export default function Shipping(props) {
  return (
    <div className={style.shipping}>
      {props.price >= 15 ? (
        <span>¡FREE SHIPPING!</span>
      ) : (
        <span className={style.calculate}>Calculate your shipping</span>
      )}
    </div>
  );
}
