import React, { useEffect } from "react";
import style from "./ProfileProducts.module.css";
import { NavBar } from "../../../Components/Navbar/Navbar";
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
} from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUser } from "../../../redux/Actions/actions";
import { MdRateReview } from "react-icons/md";

export default function ProfileProducts() {
  const dispatch = useDispatch();

  // const allProducts = useSelector((state) => state.allProducts);
  // const filteredProducts = allProducts.filter((product) => product.price >= 30);
 
  // const products = filteredProducts.slice(first, last);

  const { user } = useAuth0();
  
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const allUsers = useSelector((state) => state.allUsers);
  const userDb = allUsers?.find((element) => element.eMail === user?.email);

  const setPagination = (page) => {
    return setCurrentPage(page);
  };

  const userProducts = userDb.product

  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 8;
  const last = currentPage * productsPerPage;
  const first = last - productsPerPage;
  const products = userProducts.slice(first, last);

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
          <h2 className={style.productPanelTitle}>YOUR PRODUCTS ON SALE</h2>
          <div className={style.productsContainer}>
            {products.length > 0 ? (
              products.map((product) => {
                return (
                  <Link to={`/detail/${product._id}`}>
                    <ProfileProductCard
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
