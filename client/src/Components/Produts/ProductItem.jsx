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
          
        </div>
      </div>
    </div>
  );
};
