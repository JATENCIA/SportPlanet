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
        console.log(id, all)
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
       }

       const adToCart = (id) => {
        dispatch(addToCart(id))
          console.log("Add", id)
      
        }
          


  return (
    
      <div className={styled.main}>
        <button className={styled.back} onClick={()=>history.back(-1)}>Back to Shop</button>
       


 

 <article /* className={styled.cartitem} */> 
   
   {cart.map(e => {
     return (
       <CartItem
       key={crypto.randomUUID()}
       _id={e._id}
       name={e.name}
       price={e.price}
       quantity={e.quantity}
       image={e.image}
       delFromCart={delFromCart}
       addItem={adToCart}
      
       />
         
       
     )
   })}


<button className={styled.clean} onClick={clearCartShop}>Clean Cart</button>

  
   
   
   <CartTotal/>
  
   <br />
   <button className={styled.clean1} onClick={handleShop} >Buy now</button>
  
   </article>  
    </div>
   
  )
}

export default Cart
