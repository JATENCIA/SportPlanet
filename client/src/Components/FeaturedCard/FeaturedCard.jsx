import React from "react";
import style from "./FeaturedCard.module.css";

export default function FeaturedCard({ name, image, price }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.imgContainer}>
        <img src={image} />
      </div>
      <div className={style.descriptionContainer}>
        <h2 className={style.productName}>{name}</h2>

        <h3 className={style.productPrice}>💲 {price}</h3>
      </div>
    </div>
  );
}
