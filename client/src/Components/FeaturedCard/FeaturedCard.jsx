import React from "react";
import style from "./FeaturedCard.module.css";

export default function FeaturedCard({ name, image, price }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.imgContainer}>
        <img src={image}/>
      </div>
        <h2>{name}</h2>
        <h3>{price}</h3>
    </div>
  );
}
