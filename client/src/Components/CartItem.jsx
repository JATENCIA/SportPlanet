import React from 'react'
import style from "./CartItem.module.css"
import Cart from './Cart'

function CartItem({name,price,image, quantity,delFromCart,_id,addItem}) {
  return (
    <div className={style.cart}>
        <h1 className={style.name}>{name}</h1>
        <h2 className={style.price}>{price} x{quantity} = ${price * quantity}</h2>
        <img className={style.img} src={image[1]} alt="" width="120px" height="120px" />
        <div className={style.but}>
       <button onClick={()=> delFromCart(_id)} >-</button>
       {/* <button  onClick={()=> delFromCart(_id, true)}className={style.button}>Remove all</button> */}
       <button on onClick={()=> addItem(_id)}>+</button>
       </div>
      
    </div>
  )
}

export default CartItem