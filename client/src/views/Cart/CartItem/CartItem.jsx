import React from "react";
import style from "./CartItem.module.css";
import Cart from "../Cart";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

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
  _id,
  UUID,
  removeItem,
}) {
  let price2 = price * quantity;
  let total = price2 - (price2 * discount) / 100;

  return (
    <div className={style.itemContainer}>
      <div className={style.firstRow}>
        <div className={style.imgContainer}>
          <img src={image} alt="" />
        </div>

        <div className={style.detailsContainer}>
          <h2>{name}</h2>
          <span>Color: {color} </span>
          <span>Size: {size}</span>
          <span>Stock: {stock}</span>
        </div>

        <div className={style.price}>
          <h2>Each</h2>
          {discount <= 0 ? (
            <span>$ {price}</span>
          ) : (
            <span style={{ fontSize: "20px" }}>
              $ {price}&nbsp;
              <small style={{ color: "green", fontSize: "12px" }}>
                {discount}% OFF
              </small>
            </span>
          )}
        </div>

        <div className={style.amountContainer}>
          <h2>Quantity</h2>
          <div className={style.buttons}>
            <button
              className={style.buttonMinus}
              onClick={() => {
                if (quantity > 1) {
                  removeItem(_id, color, size, UUID);
                }
              }}
            >
              <AiOutlineMinusCircle />
            </button>
            <span>{quantity}</span>
            <button
              className={style.buttonPlus}
              onClick={() => {
                if (quantity < stock) {
                  addItem(productCart);
                }
              }}
            >
              <AiOutlinePlusCircle />
            </button>
          </div>
        </div>

        <div className={style.totalPrice}>
          <h2>Total</h2>
          <span>$ {total}</span>
        </div>
      </div>

      <div className={style.secondRow}>
        <div className={style.itemFunctions}>
          <button
            onClick={() => delFromCart(_id, color, size, UUID)}
            className={style.trashIcon}
          >
            <BsTrash />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
