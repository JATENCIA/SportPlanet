import React, { useEffect } from "react";
import style from "./LandingPage.module.css";
import background from "../../images/background.jpg";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllUser } from "../../redux/Actions";

export default function LandingPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch, location]);

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
