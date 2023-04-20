import React from "react";
import style from "./CardSales.module.css";

export default function CardSales({ title,unit_price,quantity,picture_url, description}) {
  return (
    <>
      <div
        className={style.cardContainer}
      >
        <div className={style.imgContainer}>
          <img src={picture_url} alt="producto" />
        </div>
        <div className={style.descriptionContainer}>
          <h1 className={style.productName}>{title}</h1>
          <h2 className={style.price}>${unit_price}</h2>
          <h2 className={style.productName}>Quantity: {quantity} </h2>
          <h2 className={style.productName}>Color: {description} </h2>
        </div>
      </div>
    </>
  );
}