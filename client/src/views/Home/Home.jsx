import React from "react";
import { Produts } from "../../Components/Produts";
import SlidePromos from "../../Components/SlidePromos/SlidePromos";
import styled from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styled.main}>
      <SlidePromos/>
      <Produts />
      
    </div>
  );
};
