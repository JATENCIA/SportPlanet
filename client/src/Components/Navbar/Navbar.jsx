import React, {useState} from "react";
import { Link } from "react-router-dom";
import Login from './Login'
import style from './navBar.module.css'

export const NavBar = () => {
  const [ search, setSearch ] = useState('');

  const changeHandler = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className={style.navContainer}>

      <div>
       <Link to="/home">
        <img src="https://i.postimg.cc/kGPCgB7C/logo.png" alt="logo" className={style.img}/>
       </Link>
      </div>

      <div className={style.searchDiv}>
        <button type="submit" className={style.btnSearch}>
          <i className="fas fa-search"/>
        </button>
        <input type='search' value={search} onChange={changeHandler} className={style.inputSearch} placeholder="Search Product..."/>
      </div>

      <div className={style.divLogin}> <Login /> </div>

      <button className={style.carrito}> <i class="fas fa-shopping-cart"></i> </button> 
    </div>
  );
};
