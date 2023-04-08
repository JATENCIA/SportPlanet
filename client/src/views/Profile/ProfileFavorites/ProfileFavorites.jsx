import React from "react";
import style from "./ProfileFavorites.module.css";
import { NavBar } from "../../../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaDollarSign,
  FaHeart,
  FaQuestionCircle,
  FaSadTear,
  FaUserCircle,
  FaStore,
} from "react-icons/fa";

export default function ProfileFavorites() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.userProducts);
  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.userPanel}>
        <div className={style.filterPanel}>
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
          <h2 className={style.productPanelTitle}>YOUR FAVORITES LIST</h2>
          <div className={style.productsContainer}>
            {products.length > 0 ? (
              products.map((product) => {
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
  rgb(138, 79, 79);
}
