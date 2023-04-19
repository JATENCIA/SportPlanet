import React, { useEffect, useState } from "react";
import style from "./ProfileProductCard.module.css";
import { FaEdit, FaDolly, FaExclamation, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { RiForbid2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { getAllUser, shop } from "../../../redux/Actions/actions";

export default function ProfileProductCard({
  name,
  image,
  price,
  description,
  _id,
  baneado,
}) {
  const [isBaneado, setIsBaneado] = useState(baneado);
  const { user } = useAuth0();
  const dispatch = useDispatch();

  const editHandler = async (e) => {
    e.preventDefault();
    const put = await axios.put(`/products/${_id}`);
    console.log(put.data);
  };

  const removeHandler = async (e) => {
    e.preventDefault();
    try {
      const del = await axios.post(`/products/${_id}`);
      const msg = del.data;
      setIsBaneado(msg.baneado);
      await Swal.fire({
        icon: "info",
        text: msg.message,
      });
    } catch (error) {
      return alert(error);
    }
  };
  const allUsers = useSelector((state) => state.allUsers);
  const userDb = allUsers?.find((element) => element.eMail === user?.email);

  const favoriteHandler = async (e) => {
    try {
      e.preventDefault();
      const favorite = {
        user: userDb._id,
        product: _id,
      };
      await axios.post("/users/favorite", favorite);

      await Swal.fire({
        icon: "success",
        title: "Favorite deleted succesfully!",
        timer: 1500,
        position: "center",
        showConfirmButton: false,
      });

      dispatch(getAllUser());
    } catch (error) {
      console.log(error, "error loko");
    }
  };

  return (
    <>
      <div
        className={isBaneado ? style.cardContainerBanned : style.cardContainer}
      >
        <div className={style.imgContainer}>
          <img src={image} alt="" />
        </div>
        <div className={style.descriptionContainer}>
          <h1 className={style.productName}>{name}</h1>
          <h2 className={style.price}>${price}</h2>
        </div>
        <div className={style.functionContainer}>
          <button className={style.editButton} onClick={editHandler}>
            <FaEdit />
          </button>
          <button className={style.removeButton} onClick={removeHandler}>
            <FaTrashAlt />
          </button>
          <button className={style.removeButton} onClick={favoriteHandler}>
            <AiFillHeart />
          </button>
        </div>
      </div>
    </>
  );
}
