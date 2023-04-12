import React from 'react'
import style from "./CartItem.module.css"
import Cart from './Cart'

function CartItem({name,price,image, quantity,delFromCart,_id,addItem,clearCartShop,size, deleteProduct}) {
  return (
    <div className={style.cart}>
        <div className= {style.box}>
        <div className={style.bu}>
        <h1 className={style.name}>{name}</h1>
        <br />
        <h1>{size}</h1>
<br />
<br />
        
        <h2 className={style.price}>{price} x{quantity} = ${price * quantity}</h2>
        </div>
        <div className={style.but}>
        <button onClick={()=> delFromCart(_id)} >-</button>
 <button on onClick={()=> addItem(_id)}>+</button>
 <button on onClick={()=> deleteProduct(_id)}>X</button>
 
 
 </div>
        <div className={style.im}>
        <img className={style.img} src={image} alt="" width="120px" height="120px" />
        </div>
      
        </div>
    
      
      
      
      
       
      
      
    </div>
  )
}

export default CartItem