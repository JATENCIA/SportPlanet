import React from "react";
import { Produts } from "../../Components/Produts";
import SlidePromos from "../../Components/SlidePromos/SlidePromos";
import Categories from "../../Components/Categories/Categories";
import style from "./Home.module.css";
import FeaturedCardContainer from "../../Components/FeaturedCardContainer/FeaturedCardContainer";

export const Home = () => {
  return (
    <div className={style.main}>
       <SlidePromos />
   
      <hr></hr>
      <Categories />
      <hr></hr>
      <FeaturedCardContainer />
      <hr></hr>
      <div className={style.secondContainer}>
      <div className={style.brandSection}>
          <h1 className={style.brandTitle}>Our Brands</h1>
          <div className={style.brandContainer}>
            <div className={style.brand}><img src="" alt="" /></div>
            <div className={style.brand}></div>
            <div className={style.brand}></div>
          </div>
          <div className={style.brandContainer}>
            <div className={style.brand}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1000px-Adidas_Logo.svg.png" alt="" /></div>
            <div className={style.brand}></div>
            <div className={style.brand}></div>
          </div>
        </div>
        
        <hr></hr>
        <h1 className={style.aboutUsTitle}>About Us</h1>
        <div className={style.aboutUsDescription}>
          <p>
            SportPlanet hosts a large online commerce of sport articules in
            LATAM. Our efforts are centered on enabling e-commerce of our
            customers by delivering a suite of technology solutions across the
            complete value chain of commerce. We are present in many countries
            such us: Argentina and Colombia. Through our e-commerce platform, we
            provide our users with robust online commerce and payments tools
            that not only contribute to the development of a large and growing
            ecommerce community in Latin America (a region with a population of
            over 650 million people and one of the fastest-growing Internet
            penetration rates in the world), but also foster entrepreneurship
            and social mobility. Our main focus is to deliver compelling
            technological and commercial solutions that address the distinctive
            cultural and geographic challenges of operating an online commerce
            and payments platform in Latin America.
          </p>
        </div>
        <hr></hr>
        <div className={style.footer}>Sport Planet ©</div>
      </div>
    </div>
  );
};
