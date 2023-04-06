import React from "react";
import styled from "./SlidePromos.module.css";
import banner1 from "../../images/banner1.jpeg";
import banner2 from "../../images/banner2.jpeg";
import banner3 from "../../images/banner3.jpeg";
import banner4 from "../../images/banner4.jpeg";
import banner5 from "../../images/banner5.jpeg";

function SlidePromos() {
  return (
    <div className={styled.slider}>
      <ul>
        <li>
          <img src={banner1} alt="" />
        </li>
        <li>
          <img src={banner2} alt="" />
        </li>
        <li>
          <img src={banner3} alt="" />
        </li>
        <li>
          <img src={banner4} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default SlidePromos;
