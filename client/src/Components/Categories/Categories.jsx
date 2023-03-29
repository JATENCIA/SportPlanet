import React from "react";
import style from "./Categories.module.css";
import { Link } from "react-router-dom";

export default function Categories(){
    return (
     <div>
<Link classname={style.Cardtshirts} to= "/category/t-shirts"><div>T-Shirts</div></Link>
            <Link to='/category/pants'><div>Pants</div></Link>
            <Link to='/category/shoes'><div>Shoes</div></Link>
            <Link to='/category/balls'><div>Balls</div></Link>
            <Link to='/category/supplements'><div>Supplements</div></Link>
            <Link to='/category/accessories'><div>Accessories</div></Link>   
</div>
       
    )
}