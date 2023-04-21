import React from "react";
import style from "./AllProducts.module.css";
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
  FaSearch,
} from "react-icons/fa";

import { MdRateReview, MdSell } from "react-icons/md";
import { getAllProduct, searchProduct } from "../../../redux/Actions/actions";
import AdminProfileCard from "../AdminProfileCard/AdminProfileCard";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
import { Paginate } from "../../../Components/Paginate/Paginate";

export default function AllProducts() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);

  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 10;
  const last = currentPage * productsPerPage;
  const first = last - productsPerPage;
  const products = allProducts.slice(first, last);

  const setPagination = (page) => {
    return setCurrentPage(page);
  };

  const inputChange = (event) => {
    setInput(event.target.value);
  };

  const buttonSearch = (event) => {
    dispatch(searchProduct(input));
  };

  return (
    <div className={style.container}>
      <NavBar />
      <FilterNavBar />
      <div className={style.userPanel}>
        <div className={style.filterPanel}>
          <h1 className={style.filterPanelTitle}>User Panel</h1>
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
          <div className={style.firstRow}>
            <h2 className={style.productPanelTitle}>ALL PRODUCTS</h2>
            <input
              type="text"
              className={style.searchInput}
              placeholder="Search product..."
              value={input}
              onChange={inputChange}
            />

            <button
              className={style.buttonSearch}
              onClick={() => buttonSearch()}
            >
              <FaSearch />
            </button>
            <h2 className={style.totalSales}>
              Total Products:{allProducts.length}
            </h2>
          </div>
          <div className={style.productsContainer}>
            {products?.length > 0 ? (
              products?.map((product) => {
                return (
                  <AdminProductCard
                    key={crypto.randomUUID()}
                    _id={product._id}
                    name={product.name}
                    image={product.productConditionals[0].image[0]}
                    price={product.price}
                    description={product.description}
                    baneado={product.baneado}
                    discount={product.discount}
                    season={product.season}
                    gender={product.gender}
                    state={product.state}
                    brands={product.brands}
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
            productsPerPage={productsPerPage}
            allProducts={allProducts.length}
            setPagination={setPagination}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
