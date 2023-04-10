import React from "react";
import Shipping from "../Shipping/Shipping";
import style from "./ProductCard.module.css";

export default function ProductCard({ name, image, price, description }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.imgContainer}>
        <img src={image} alt="" />
      </div>
      <div className={style.descriptionContainer}>
        <h1 className={style.productName}>{name}</h1>
        <h2 className={style.price}>${price}</h2>
        <Shipping price={price} />
      </div>
    </div>
  );
}
