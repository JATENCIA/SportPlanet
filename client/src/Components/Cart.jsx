import React from 'react'
import CartItem from './CartItem'
import CartTotal from './CartTotal'
import { removeAllCart, removeOneCart, clearCart, getAllProduct, shop, addToCart } from '../redux/Actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import styled from "./Cart.module.css"
import { Link } from 'react-router-dom'

function Cart() {

  
  
  

    const cart = useSelector(state =>state.shoppingCart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProduct());
      }, [dispatch]);

    const delFromCart = (id, all = false) => {
        if(all) {
          dispatch(removeAllCart(id))
        }
        else{
          dispatch(removeOneCart(id))
        }
      
      }

      const clearCartShop = () => {
       dispatch(clearCart())
        }

       const handleShop = () => {
          dispatch(shop(cart))
          dispatch(clearCart())
       }

       const adToCart = (id) => {
        dispatch(addToCart(id))
        }
          


  return (
    
      <div className={styled.main}>
        <br />
        <button className={styled.back} onClick={()=>history.back(-1)}>Back to Shop</button>
          <button className={styled.clean} onClick={()=>clearCartShop()}><img src='data:image/png;base64,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' width="30px"></img></button>
        
       


 

 <article  className={styled.cartitem} > 
   
   {cart.map(e => {
     return (
       <CartItem
       key={crypto.randomUUID()}
       productCart={e}
       _id={e.id}
       name={e.name}
       price={e.price}
       quantity={e.quantity}
       stock={e.stock}
       image={e.image}
       size={e.size}
       color={e.color}
       delFromCart={delFromCart}
       addItem={adToCart}
       
      
       />
         
       
     )
   })}


{/* <button className={styled.clean} onClick={clearCartShop}>Clean Cart</button> */}

  
   

   <CartTotal/>
  
   
   <button className={styled.clean1} onClick={handleShop} >Buy now</button>

   </article>  
    </div>
   
  )
}

export default Cart
