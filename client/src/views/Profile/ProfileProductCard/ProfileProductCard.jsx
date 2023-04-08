import React from "react";
import style from "./ProfileProductCard.module.css";
import { FaEdit, FaDolly, FaExclamation, FaTrash } from "react-icons/fa";

export default function ProfileProductCard({
  name,
  image,
  price,
  description,
}) {
  return (
    <div className={style.cardContainer}>
      <div className={style.imgContainer}>
        <img src={image[1]} alt="" />
      </div>
      <div className={style.descriptionContainer}>
        <h1 className={style.productName}>{name}</h1>
        <h2 className={style.price}>${price}</h2>
      </div>
      <div className={style.functionContainer}>
        <button className={style.editButton}>
          <FaEdit />
        </button>
        <button className={style.removeButton}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
