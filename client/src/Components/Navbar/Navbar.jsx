import React from "react";
import styled from "./Navbar.module.css"
import {Link} from "react-router-dom"
import Produts from "../Produts/Produts";


const Navbar = () => {
  return <div className={styled.Main_container}>
    <div className={styled.con1}>
    <label >Search:
    <input type="text" />
    </label>
    </div>
  <div className={styled.con2}>
    <Link to="/produts">
    <div>Products</div>
    </Link>
    <div>Login</div>
    <div>Shop</div>
    </div>
    </div>

  
};

export default Navbar;
