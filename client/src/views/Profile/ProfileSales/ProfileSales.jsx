import React from "react";
import style from "./ProfileSales.module.css";
import { NavBar } from "../../../Components/Navbar/Navbar";
import ProfileProductCard from "../ProfileProductCard/ProfileProductCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaDollarSign,
  FaHeart,
  FaQuestionCircle,
  FaUserCircle,
  FaStore,
  FaSadTear,
} from "react-icons/fa";

import { MdRateReview } from "react-icons/md";

export default function ProfileSales() {
  const products = useSelector((state) => state.allProducts);
  const filteredProducts = products.filter((products) => products.price >= 30);
  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.userPanel}>
        <div className={style.filterPanel}>
          <h1 className={style.userPanelTitle}>User Panel</h1>
          <hr />
          <Link to="/profile">
            <div className={style.filter}>
              <FaUserCircle />
              <h3 className={style.myShopping}>MY PROFILE</h3>
            </div>
          </Link>

          <Link to="/profile/myproducts">
            <div className={style.filter}>
              <FaStore />
              <h3 className={style.myShopping}>MY PRODUCTS</h3>
            </div>
          </Link>

          <Link to="/profile/shopping">
            <div className={style.filter}>
              <FaShoppingBag />
              <h3 className={style.myShopping}>MY SHOPPING</h3>
            </div>
          </Link>

          <Link to="/profile/sales">
            <div className={style.filter}>
              <FaDollarSign />
              <h3 className={style.mySales}>MY SALES</h3>
            </div>
          </Link>

          <Link to="/profile/reviews">
            <div className={style.filter}>
              <MdRateReview />
              <h3 className={style.myReviews}>MY REVIEWS</h3>
            </div>
          </Link>

          <Link to="/profile/favorites">
            <div className={style.filter}>
              <FaHeart />
              <h3 className={style.myFavorites}>FAVORITE PRODUCTS</h3>
            </div>
          </Link>

          <Link to="/help">
            <div className={style.filter}>
              <FaQuestionCircle />
              <h3 className={style.help}>HELP</h3>
            </div>
          </Link>
        </div>
        <div className={style.productPanel}>
          <h2 className={style.productPanelTitle}>YOUR SALES</h2>
          <div className={style.productsContainer}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                return (
                  <Link to={`/detail/${product._id}`}>
                    <ProfileProductCard
                      key={crypto.randomUUID()}
                      _id={product._id}
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      description={product.description}
                    />
                  </Link>
                );
              })
            ) : (
              <p className={style.loading}>
                NOTHING TO SHOW HERE...
                <span className={style.sadFace}>{<FaSadTear />}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
