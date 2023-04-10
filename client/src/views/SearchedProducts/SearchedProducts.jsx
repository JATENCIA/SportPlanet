import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSearchedProducts } from "../../redux/Actions/actions";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { NavBar } from "../../Components/Navbar";
import FilterNavBar from "../../Components/FilterNavBar/FilterNavBar";
import { Link } from "react-router-dom";
import style from "../SearchedProducts/searchedProducts.module.css";
import { Paginate } from "../../Components/Paginate/Paginate";

const SearchedProducts = () => {
  const dispatch = useDispatch();
  const searchedProducts = useSelector((state) => state.searchedProducts);
  const { product } = useParams();

  useEffect(() => {
    dispatch(getSearchedProducts(product));
    //return para limpiar searchedProducts
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

      <div className={style.container}>
        {products.map((product) => (
          <Link to={`/detail/${product._id}`}>
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              gender={product.gender}
              state={product.state}
              size={product.size}
              image={product.image}
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
