import React from "react";
import style from "./Categories.module.css";
import { Link } from "react-router-dom";

export default function Categories(){
    return (
        <div className={style.Namecontainer}>
        <span className={style.NameTitle}>Popular Categories</span>

    <main className={style.cointainer}>
   <Link className={style.item1} to= "/category/tShirts"><div className={style.names}>T-Shirts</div></Link>
            <Link className={style.item2} to='/category/pants'><div className={style.names} >Pants</div></Link>
            <Link className={style.item3} to='/category/shoes'><div className={style.names}>Shoes</div></Link>
            <Link className={style.item4} to='/category/balls'><div className={style.names}>Balls</div></Link>
            <Link className={style.item5} to='/category/supplements'><div className={style.names}>Supplements</div></Link>
           <Link className={style.item6} to='/category/accessories'><div className={style.names}>Accessories</div></Link>

    </main>      
 </div>  
  


      
    )
}