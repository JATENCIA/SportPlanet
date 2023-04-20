import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Shipping from "../Shipping/Shipping";
import style from "./ProductCard.module.css";
import { getAllUser } from "../../redux/Actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import HeartButton from "./HeartButton/HeartButton";

export default function ProductCard({ _id, name, image, price }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.iconHeart}>
        <HeartButton _id={_id} />
      </div>
      <div className={style.imgContainer}>
        <img src={image} alt="" />
      </div>
      <div className={style.descriptionContainer}>
        <h1 className={style.productName}>{name}</h1>
        <h2 className={style.price}>💲{price}</h2>
        <Shipping price={price} />
      </div>
    </div>
  );
}
