import React, { useState } from "react";
import style from "./AdminProductCard.module.css";
import { FaEdit } from "react-icons/fa";
import { RiForbid2Line } from "react-icons/ri";
import Swal from 'sweetalert2'
import axios from 'axios'

export default function AdminProductCard({ _id, name, image, baneado }) {

  const [isBaneado, setIsBaneado] = useState(baneado)

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

  return (
    <div className={isBaneado ? style.cardContainerBanned : style.cardContainer}>
      <div className={style.imgContainer}>
        <img src={image} />
      </div>
      <h2>{name}</h2>
      {isBaneado ? <h3>It's Banned</h3> : <></> }
      
      <div className={style.functionContainer}>
        <button className={style.editButton} onClick={editHandler}>
          <FaEdit />
        </button>
        <button className={style.removeButton} onClick={removeHandler}>
          <RiForbid2Line />
        </button>
      </div>
    </div>
  );
}
