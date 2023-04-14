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
}) {
  return (
    <div className={style.itemContainer}>
      <div className={style.firstRow}>
        <div className={style.imgContainer}>
          <img src={""} alt="" className={style.itemImage} />
        </div>

        <div className={style.detailsContainer}>
          <h2>Name</h2>
          <span>Color: </span>
          <span>Size: </span>
          <span>In Stock</span>
        </div>

        <div className={style.price}>
          <h2>Each</h2>
          <span>Product Price</span>
        </div>

        <div className={style.amountContainer}>
          <h2>Quantity</h2>
          <div className={style.buttons}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

        <div className={style.totalPrice}>
          <h2>Total</h2>
          <span>Total Price</span>
        </div>
      </div>

      <div className={style.secondRow}>
        <div className={style.itemFunctions}>
          <button className={style.trashIcon} onClick={delFromCart}>
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
