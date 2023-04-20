import React from "react";
import style from "./ContinousText.module.css";

export default function ContinousText() {
  return (
    <div className={style.container}>
      <div className={style.list}>
        <span>• LOOK AT OUR PROMOTIONS TO DISCOVER CRAZY DISCOUNTS •</span>
        <span>
          • USE OUR CODE 'SPORTPLANET' TO GET A 15% DISCOUNT ON YOUR NEXT
          PURCHASE •
        </span>
        <span>
          • FOLLOW US ON OUR SOCIAL MEDIAS TO FIND OUT OUR LATEST/INCOMING
          CONTENT •
        </span>
      </div>
    </div>
  );
}
