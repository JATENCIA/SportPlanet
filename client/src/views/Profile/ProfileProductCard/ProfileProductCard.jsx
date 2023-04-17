import React, { useEffect, useState } from "react";
import style from "./ProfileProductCard.module.css";
import { FaEdit, FaDolly, FaExclamation, FaTrashAlt } from "react-icons/fa";
import axios from 'axios'
import Swal from "sweetalert2";
import { RiForbid2Line } from "react-icons/ri";

export default function ProfileProductCard({name,image,price,description,_id,baneado}) {
  const [isBaneado, setIsBaneado] = useState('')

  const editHandler = async (e) => {
    e.preventDefault();
    const put = await axios.put(`/products/${_id}`);
    console.log(put.data);
  }

  const removeHandler = async (e) => {
    e.preventDefault();
    try {
      const del = await axios.post(`/products/${_id}`)
      const msg = del.data;
      setIsBaneado(msg.baneado)
      await Swal.fire({
        icon: 'info',
        text: msg.message,
      })
    } catch (error) {
      return alert(error) 
    }
  };

  return(
    <div className={isBaneado ? style.cardContainerBanned : style.cardContainer}>
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
          <RiForbid2Line />
        </button>
      </div>
    </div>
  )
}