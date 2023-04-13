import React from 'react'
import style from "./CartItem.module.css"
import Cart from './Cart'

function CartItem({ name, price, image, quantity, delFromCart, productCart, addItem, clearCartShop, size, color, stock }) {

  return (
    <div className={style.cart}>
      <div className={style.box}>
        <div className={style.bu}>
          <h1 className={style.name}>{name}</h1>
          {
            size !== "amount" ?
              <h2 className={style.price}>Size: {size}</h2>
              :
              ""
          }
          <h2 className={style.price}>Color: {color}</h2>

          <h2 className={style.price}>{price} x{quantity} = ${price * quantity}</h2>
        </div>
        <div className={style.but}>
          <button onClick={() => { if (quantity > 1) { delFromCart(productCart) } }} >-</button>
          <button on onClick={() => { if (quantity < stock) { addItem(productCart) } }}>+</button>
        </div>
        <div className={style.im}>
          <img className={style.img} src={image} alt="" width="120px" height="120px" />
        </div>
      </div>
    </div>
  )
}

export default CartItem