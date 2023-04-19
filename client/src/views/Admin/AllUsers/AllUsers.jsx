import React from "react";
import style from "./AllUsers.module.css";
import { NavBar } from "../../../Components/Navbar/Navbar";
import FilterNavBar from "../../../Components/FilterNavBar/FilterNavBar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
import { getAllUser } from "../../../redux/Actions/actions";
import AdminProfileCard from "../AdminProfileCard/AdminProfileCard";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
import { Paginate } from "../../../Components/Paginate/Paginate";

export default function AllUsers() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const allUsers = useSelector((state) => state.allUsers);

  const [currentPage, setCurrentPage] = React.useState(1);
  const usersPerPage = 10;
  const last = currentPage * usersPerPage;
  const first = last - usersPerPage;
  const users = allUsers.slice(first, last);

  const setPagination = (page) => {
    return setCurrentPage(page);
  };

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
          <h2 className={style.productPanelTitle}>USERS LIST</h2>
          <div className={style.productsContainer}>
            {users.length > 0 ? (
              users.map((user) => {
                return (
                  <AdminProductCard
                    key={crypto.randomUUID()}
                    _id={user._id}
                    name={user.name}
                    image={user.image}
                    baneado={user.baneado}
                    lastName={user.lastName}
                    roll={user.roll}
                  />
                );
              })
            ) : (
              <p className={style.loading}>
                LOADING...
                <span className={style.sadFace}>{<FaSadTear />}</span>
              </p>
            )}
          </div>
          <Paginate
            productsPerPage={usersPerPage}
            allProducts={allUsers.length}
            setPagination={setPagination}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
