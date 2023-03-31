import React from "react";
import styled from "./ProductItem.module.css"



export const ProductItem = ({
  name,
  description,
  price,
  gender,
  state,
  size,
  image,
}) => {
 /*  console.log("🚀 ~ file: ProductItem.jsx:12 ~ size:", size); */




  return (
    <div className={styled.maincontainer}>
    <div className={styled.container}>
    <div className="flex">
 <img className="w-70 h-60" src={image[1]} alt="" />
 </div>
{/*  <div className="bg-black w-30 h-4"></div> */}
<div className={styled.p1}>
      <div>
        <h1 className="text-3xl text-lg">{name}</h1>
      </div>
      <div className="text-blue-500 text-xs">{description}</div>
      
      <div>{gender}</div>
      <div>{state}</div>
      
      
      
       <div>$ {price}</div>
       <p className={styled.p}>Envio Gratis!!</p>
       
      </div>
      </div>
      <button className="Add">Add to cart</button>
    </div>
    
  );
};
