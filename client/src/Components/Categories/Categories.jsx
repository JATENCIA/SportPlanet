import React from "react";
import style from "./Categories.module.css";
import { Link } from "react-router-dom";
import Tshirts from "./Tshirts/Tshirts";

export default function Categories(){
    return (
        <div className={style.containerName}> 
        <div>
        <h2 className={style.Name}>Popular Categories</h2>
        </div>
     <div className={style.cointainer}>
<Link className={style.TShirtsContainer} to= "/category/tShirts"><div className={style.names}>T-Shirts</div></Link>
            <Link className={style.PantsContainer} to='/category/pants'><div className={style.names} >Pants</div></Link>
            <Link className={style.ShoesContainer} to='/category/shoes'><div className={style.names}>Shoes</div></Link>
            <div className={style.cointainer}> 
            <Link className={style.BallsContainer} to='/category/balls'><div className={style.names}>Balls</div></Link>
            <Link className={style.SupplementsContainer} to='/category/supplements'><div className={style.names}>Supplements</div></Link>
           <Link className={style.AccessoriesContainer} to='/category/accessories'><div className={style.names}>Accessories</div></Link>
 </div>  
 </div>
</div>

      
    )
}
