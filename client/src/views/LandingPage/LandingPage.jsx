import React from "react";
import style from "./LandingPage.module.css";
import background from "../../images/background.jpg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className={style.welcomeContainer}>
      <h1>SPORT PLANET</h1>
      <p className={style.slogan}>FIND ALL YOUR DEPORTIVE PRODUCTS HERE</p>
      <Link to="/home">
        <button className={style.buttonToHome}>LETS GO</button>
      </Link>
    </div>
  );
}
