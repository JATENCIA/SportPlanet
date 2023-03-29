import React from "react";
import style from "./Categories.module.css";
import { Link } from "react-router-dom";

export default function Categories(){
    return (
     <div class={style.cointainer}>
<Link gitto= "/category/t-shirts"><div className={style.TShirtsContainer}>T-Shirts</div></Link>
            <Link to='/category/pants'><div className={style.PantsContainer}>Pants</div></Link>
            <Link to='/category/shoes'><div className={style.ShoesContainer}>Shoes</div></Link>
            <Link to='/category/balls'><div className={style.BallsContainer}>Balls</div></Link>
            <Link to='/category/supplements'><div className={style.SupplementsContainer}>Supplements</div></Link>
            <Link to='/category/accessories'><div className={style.AccessoriesContainer}>Accessories</div></Link>   
</div>

      
    )
}