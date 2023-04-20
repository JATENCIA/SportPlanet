import React, { useState } from "react";
import style from "./AdminProductCard.module.css";
import { FaEdit } from "react-icons/fa";
import { RiForbid2Line } from "react-icons/ri";
import Swal from 'sweetalert2'
import axios from 'axios'
import EditModal from "../EditModal";

export default function AdminProductCard({ _id, name, image, baneado, lastName, roll, price,description,discount,season,gender,state,brands }) {

  const [isBaneado, setIsBaneado] = useState(baneado);
  const [editView, setEditView] = useState(false);
  // const [editViewProduct, setEditViewProduct] = useState(false)

  const editHandler = async (e) => {
      e.preventDefault();
      try {
        editView ? setEditView(false) : setEditView(true)
      } catch (error) {
        alert(error)  
      };
  }

  const removeHandler = async (e) => {
    if(lastName){
      e.preventDefault()
      try {
        const del = await axios.post(`/users/${_id}`)
        const msg = del.data;
        setIsBaneado(msg.baneado)
        await Swal.fire({
          icon: 'info',
          text: msg.message,
        });
      } catch (error) {
        alert(error)
      }
    }else{
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
          alert(error) 
      }
    }
  };

  return (
    <>
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

    {editView && <EditModal _id={_id} name={name} roll={roll} lastName={lastName} setEditView={setEditView} 
                  price={price} description={description} discount={discount} season={season}
                  gender={gender} state={state} brands={brands}/>}

    </>
  );
}
