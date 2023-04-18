import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Filters from "../../Components/Filters/Filters";
import {
  cleanSearchedProducts,
  getSearchedProducts,
} from "../../redux/Actions/actions";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { NavBar } from "../../Components/Navbar";
import FilterNavBar from "../../Components/FilterNavBar/FilterNavBar";
import { Link } from "react-router-dom";
import style from "../SearchedProducts/searchedProducts.module.css";
import { useNavigate } from "react-router-dom";
import { Paginate } from "../../Components/Paginate/Paginate";


const SearchedProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchedProducts = useSelector((state) => state.searchedProducts);
  const { product } = useParams();

  useEffect(() => {
    dispatch(getSearchedProducts(product, navigate));
    //return para limpiar searchedProducts
    return function () {
      dispatch(cleanSearchedProducts());
    };
  }, [dispatch, product]);
 
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 10;
  const ultimo = currentPage * productsPerPage;
  const primero = ultimo - productsPerPage;
  const products = searchedProducts.slice(primero, ultimo);

  const setPagination = (page) => {
    return setCurrentPage(page);
  };

  return (
    <div>
      <NavBar />
      <FilterNavBar />
    <Filters SizeFilter={true} GenderFilter={true} WearedFilter={true} SeasonFilter={true} ResetFilters={true} />


      <div className={style.container}>
        {products.map((product) => (
          <Link to={`/detail/${product._id}`}>
            <ProductCard
              key={product.id}
              _id={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              gender={product.gender}
              state={product.state}
              size={product.size}
              image={product.productConditionals[0].image[1]}
            />
          </Link>
        ))}
      </div>

      <Paginate
        productsPerPage={productsPerPage}
        allProducts={products.length}
        setPagination={setPagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default SearchedProducts;
