import React from "react";
import style from "./ReviewCard.module.css";

export default function ReviewCard() {
  return (
    <div className={style.cardContainer}>
      <div className={style.imgContainer}>PRODUCT IMAGE</div>
      <div className={style.reviewContainer}>
        <p>LA VERDAD QUE UNA CAGADA NO COMPREN NUNCA ESTO</p>
      </div>
    </div>
  );
}
