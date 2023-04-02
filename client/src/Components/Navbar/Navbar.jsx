import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSearchedProducts } from "../../redux/Actions/actions";
import Login from './Login'
import style from './navBar.module.css'

export const NavBar = () => {
  const dispatch = useDispatch();
  const [ product, setProduct ] = useState('');

  const changeHandler = (e) => {
    setProduct(e.target.value)
  }

  const searchHandler = () => {
    dispatch(getSearchedProducts(product))
  } 

  return (
    <div className={style.navContainer}>

      <div>
       <Link to="/home">
        <img src="https://i.postimg.cc/kGPCgB7C/logo.png" alt="logo" className={style.img}/>
       </Link>
      </div>

      <div className={style.searchDiv}>
        <Link to={`/products/${product}`}>
        <button type="submit" className={style.btnSearch} onClick={searchHandler}>
          <i className="fas fa-search"/>
        </button>
        </Link>
        <input type='search' value={product} onChange={changeHandler} className={style.inputSearch} placeholder="Search Product..."/>
      </div>

      <div className={style.divLogin}> <Login /> </div>

      <button className={style.carrito}> <i className="fas fa-shopping-cart"></i> </button> 
    </div>
  );
};

