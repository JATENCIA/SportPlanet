import React from "react";
import style from "./AdminProductCard.module.css";
import { FaEdit } from "react-icons/fa";
import { RiForbid2Line } from "react-icons/ri";

export default function AdminProductCard({ name, image, baneado }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.imgContainer}>
        <img src={image} />
      </div>
      <h2>{name}</h2>
      <h3>State: {baneado} </h3>
      <div className={style.functionContainer}>
        <button className={style.editButton}>
          <FaEdit />
        </button>
        <button className={style.removeButton}>
          <RiForbid2Line />
        </button>
      </div>
    </div>
  );
}
