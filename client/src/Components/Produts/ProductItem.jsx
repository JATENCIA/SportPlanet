import React from "react";
import styled from "./ProductItem.module.css";

export const ProductItem = ({
  name,
  description,
  price,
  gender,
  state,
  size,
  image,
  addToCart

}) => {
  return (
    <div className={styled.maincontainer}>
      <div className={styled.container}>
        <div className={styled.flex}>
          <img className={styled.img} src={image[1]} alt="" />
        </div>
        {/*  <div className="bg-black w-30 h-4"></div> */}
        <div className={styled.p1}>
          <div>
            <h1 className={styled.name}>{name}</h1>
          </div>
          <div className={styled.name}>{state}</div>
          <div className={styled.name}>$ {price}</div>
          <button className={styled.button} onClick={() => addToCart(_id)}>Add <img src="https://thumbs.dreamstime.com/b/icono-del-carrito-de-compras-carro-ilustraci%C3%B3n-vectorial-190744057.jpg" alt="" width="30px"/> </button> 
        </div>
      </div>
    </div>
  );
};
