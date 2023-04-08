import React from "react";
import style from "./ProfileCard.module.css";
import { FaEdit } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <div className={style.cardContainer}>
      <button className={style.editButton}>
        <FaEdit />
      </button>
      <div className={style.imgContainer}>
        <span>IMAGE</span>
      </div>
      <h2>USER NAME</h2>
      <span>VALORATION</span>
    </div>
  );
}
