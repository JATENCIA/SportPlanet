import React from "react";
import style from "./CartItem.module.css";
import Cart from "../Cart";
import { BsTrash } from "react-icons/bs";

export default function CartItem({
  name,
  price,
  image,
  quantity,
  delFromCart,
  productCart,
  addItem,
  clearCartShop,
  size,
  color,
  stock,
  discount,
}) {
  return (
    <div className={style.itemContainer}>
      <div className={style.firstRow}>
        <div className={style.imgContainer}>
          <img src={image} alt="" className={style.itemImage} />
        </div>

        <div className={style.detailsContainer}>
          <h2>{name}</h2>
          <span>Color: {color} </span>
          <span>Size: {size}</span>
          <span>Stock: {stock}</span>
        </div>

        <div className={style.price}>
          <h2>Each</h2>
          <span>{price}</span>
        </div>

        <div className={style.amountContainer}>
          <h2>Quantity</h2>
          <div className={style.buttons}>
            <button onClick={() => { if (quantity > 1) { delFromCart(productCart) } }} >-</button>
            <span>{quantity}</span>
             <button on onClick={() => { if (quantity < stock) { addItem(productCart) } }}>+</button>
          </div>
        </div>

        <div className={style.totalPrice}>
          <h2>Total</h2>
          <span>{price * quantity}</span>
        </div>
      </div>

      <div className={style.secondRow}>
        <div className={style.itemFunctions}>
          <button className={style.trashIcon}>
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
