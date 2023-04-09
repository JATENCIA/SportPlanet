import React from "react";
import style from "./AdminShopping.module.css";
import { NavBar } from "../../../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaShoppingBag,
  FaDollarSign,
  FaHeart,
  FaQuestionCircle,
  FaSadTear,
  FaUserCircle,
  FaStore,
  FaUsers,
  FaListAlt,
} from "react-icons/fa";

import { MdRateReview } from "react-icons/md";

export default function AdminShopping() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const filteredProducts = products.filter((product) => product.price >= 25);
  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.userPanel}>
        <div className={style.filterPanel}>
          <h1 className={style.userPanelTitle}>User Panel</h1>
          <hr />
          <Link to="/dashboard">
            <div className={style.filter}>
              <FaUserCircle />
              <h3 className={style.myShopping}>MY PROFILE</h3>
            </div>
          </Link>

          <Link to="/dashboard/myproducts">
            <div className={style.filter}>
              <FaStore />
              <h3 className={style.myShopping}>MY PRODUCTS</h3>
            </div>
          </Link>

          <Link to="/dashboard/shopping">
            <div className={style.filter}>
              <FaShoppingBag />
              <h3 className={style.myShopping}>MY SHOPPING</h3>
            </div>
          </Link>

          <Link to="/dashboard/sales">
            <div className={style.filter}>
              <FaDollarSign />
              <h3 className={style.mySales}>MY SALES</h3>
            </div>
          </Link>

          <Link to="/dashboard/reviews">
            <div className={style.filter}>
              <MdRateReview />
              <h3 className={style.myReviews}>MY REVIEWS</h3>
            </div>
          </Link>

          <Link to="/dashboard/favorites">
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

          <h1 className={style.userPanelTitle}>Admin Panel</h1>
          <hr />
          <div className={style.adminPanel}>
            <Link to="/dashboard/allusers">
              <div className={style.filter}>
                <FaUsers />
                <h3 className={style.allUsers}>ALL USERS</h3>
              </div>
            </Link>

            <Link to="/dashboard/allproducts">
              <div className={style.filter}>
                <FaListAlt />
                <h3 className={style.allProducts}>ALL PRODUCTS</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className={style.productPanel}>
          <h2 className={style.productPanelTitle}>YOUR SHOPPING</h2>
          <div className={style.productsContainer}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                return (
                  <Link to={`/detail/${product._id}`}>
                    <ProductCard
                      key={crypto.randomUUID()}
                      _id={product._id}
                      name={product.name}
                      image={product.image}
                      size={product.size}
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
