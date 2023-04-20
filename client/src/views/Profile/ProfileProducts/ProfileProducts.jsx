import React, { useEffect } from "react";
import style from "./ProfileProducts.module.css";
import { NavBar } from "../../../Components/Navbar/Navbar";
import FilterNavBar from "../../../Components/FilterNavBar/FilterNavBar";
import { useDispatch, useSelector } from "react-redux";
import ProfileProductCard from "../ProfileProductCard/ProfileProductCard";
import { Paginate } from "../../../Components/Paginate/Paginate";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaDollarSign,
  FaHeart,
  FaQuestionCircle,
  FaSadTear,
  FaUserCircle,
  FaStore,
  FaSearch,
} from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUser, searchProduct } from "../../../redux/Actions/actions";
import { MdRateReview, MdSell } from "react-icons/md";
import AdminProductCard from "../../Admin/AdminProductCard/AdminProductCard";

export default function ProfileProducts() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  // const allProducts = useSelector((state) => state.allProducts);
  // const filteredProducts = allProducts.filter((product) => product.price >= 30);

  // const products = filteredProducts.slice(first, last);

  const { user } = useAuth0();

  React.useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const allUsers = useSelector((state) => state.allUsers);
  const userDb = allUsers?.find((element) => element.eMail === user?.email);

  const setPagination = (page) => {
    return setCurrentPage(page);
  };

  const inputChange = (event) => {
    setInput(event.target.value);
  };

  const userProducts = userDb.product;

  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 8;
  const last = currentPage * productsPerPage;
  const first = last - productsPerPage;
  const products = userProducts.slice(first, last);

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
            <h2 className={style.productPanelTitle}>YOUR PRODUCTS ON SALE</h2>
            {/* <input
              type="text"
              className={style.searchInput}
              placeholder="Search product..."
              value={input}
              onChange={inputChange}
            />

            <button className={style.buttonSearch} onClick={buttonSearch}>
              <FaSearch />
            </button> */}
            <h2 className={style.totalProducts}>
              Total Products: {userProducts.length}
            </h2>
          </div>
          <div className={style.productsContainer}>
            {products.length > 0 ? (
              products.map((product) => {
                return (
                  <Link to={`/detail/${product._id}`}>
                    <AdminProductCard
                      key={product._id}
                      _id={product._id}
                      name={product.name}
                      image={product.productConditionals[0].image[0]}
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
