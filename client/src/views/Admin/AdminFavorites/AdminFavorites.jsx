import React, { useEffect } from "react";
import style from "./AdminFavorites.module.css";
import { NavBar } from "../../../Components/Navbar/Navbar";
import FilterNavBar from "../../../Components/FilterNavBar/FilterNavBar";
import { useDispatch, useSelector } from "react-redux";
import { Paginate } from "../../../Components/Paginate/Paginate";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaDollarSign,
  FaHeart,
  FaQuestionCircle,
  FaUserCircle,
  FaStore,
  FaEdit,
  FaUsers,
  FaListAlt,
  FaSadTear,
} from "react-icons/fa";

import { MdRateReview, MdSell } from "react-icons/md";
import ProfileProductCard from "../../Profile/ProfileProductCard/ProfileProductCard";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUser } from "../../../redux/Actions";

export default function AdminFavorites() {
  const dispatch = useDispatch();

  const setPagination = (page) => {
    return setCurrentPage(page);
  };

  const { user } = useAuth0();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const allUsers = useSelector((state) => state.allUsers);
  const userDb = allUsers?.find((element) => element.eMail === user?.email);

  const favoritesProducts = userDb.favorites;

  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 8;
  const last = currentPage * productsPerPage;
  const first = last - productsPerPage;
  const products = favoritesProducts.slice(first, last);

  return (
    <div className={style.container}>
      <NavBar />
      <FilterNavBar />
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

          <Link to="/dashboard/favorites">
            <div className={style.filter}>
              <FaHeart />
              <h3 className={style.myFavorites}>FAVORITE PRODUCTS</h3>
            </div>
          </Link>

          <Link to="/post/product">
            <div className={style.filter}>
              <MdSell />
              <h3 className={style.sellProducts}>SELL PRODUCTS</h3>
            </div>
          </Link>

          <Link to="/faq">
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
          <h2 className={style.productPanelTitle}>YOUR FAVORITES LIST</h2>
          <div className={style.productsContainer}>
            {products.length > 0 ? (
              products.map((product) => {
                return (
                  <Link to={`/detail/${product._id}`}>
                    <ProfileProductCard
                      key={crypto.randomUUID()}
                      _id={product._id}
                      name={product.name}
                      image={product.productConditionals[0].image[1]}
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
          <Paginate
            productsPerPage={productsPerPage}
            allProducts={products.length}
            setPagination={setPagination}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
