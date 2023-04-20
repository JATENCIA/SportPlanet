import React, { useEffect, useState } from "react";
import style from "./ProfileSales.module.css";
import { NavBar } from "../../../Components/Navbar/Navbar";
import FilterNavBar from "../../../Components/FilterNavBar/FilterNavBar";
import ProfileProductCard from "../ProfileProductCard/ProfileProductCard";
import { Paginate } from "../../../Components/Paginate/Paginate";
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
import { MdRateReview, MdSell } from "react-icons/md";
import {
  getAllUser,
  getSearchedProducts,
} from "../../../redux/Actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import CardSales from "../../Admin/CardSales/CardSales";

export default function ProfileSales() {
  const [input, setInput] = React.useState("");

  const dispatch = useDispatch();

  const { user } = useAuth0();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const allUsers = useSelector((state) => state.allUsers);
  const userDb = allUsers?.find((element) => element.eMail === user?.email);

  const userSales = userDb.mySales;

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const last = currentPage * productsPerPage;
  const first = last - productsPerPage;
  const products = userSales.slice(first, last);

  const setPagination = (page) => {
    return setCurrentPage(page);
  };

  const inputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={style.container}>
      <NavBar />
      <FilterNavBar />
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

          <Link to="/profile/favorites">
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
        </div>
        <div className={style.productPanel}>
          <div className={style.firstRow}>
            <h2 className={style.productPanelTitle}>YOUR SALES</h2>
            <input
              type="text"
              className={style.searchInput}
              placeholder="Search product..."
              value={input}
              onChange={inputChange}
            />
            <h2 className={style.totalSales}>Total: </h2>
          </div>
          <div className={style.productsContainer}>
            {products.length > 0 ? (
              products.map((product) => {
                return (
                  <Link to={`/detail/${product._id}`}>
                    <CardSales
                      key={crypto.randomUUID()}
                      title={product.title}
                      unit_price={product.unit_price}
                      quantity={product.quantity}
                      picture_url={product.picture_url}
                    />
                  </Link>
                );
              })
            ) : (
              <div>
                <p className={style.loading}>
                  You didn't sell anything... YET!
                  {/* <span className={style.sadFace}>{<FaSadTear />}</span> */}
                </p>
                <p className={style.loading}>
                  You want to sell something and you don't know how to do it?{" "}
                  <Link
                    to="/post/product"
                    className="pl-5 underline hover:text-black"
                  >
                    {" "}
                    CLICK HERE!
                  </Link>
                </p>
              </div>
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
