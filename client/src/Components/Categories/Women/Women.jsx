import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { filterByGender, getAllProduct} from "../../../redux/Actions";
import ProductCard from "../../ProductCard/ProductCard";
import { Paginate } from "../../Paginate/Paginate";
import { Link } from "react-router-dom";
import { NavBar } from "../../Navbar";
import FilterNavBar from "../../FilterNavBar/FilterNavBar";
import Filter from "../../Filters/Filters";
import style from "./Women.module.css";

export default function Women() {
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  const allProducts = useSelector((state) => state.filteredProducts);
  console.log("1", allProducts);
  
  useEffect(() => {
    dispatch(filterByGender("women"));
  }, [dispatch]);

  const filterProducts = allProducts.filter(
    (product) => product.category === "tshirts" && product.gender === "women"
  );

  console.log("2", filterProducts);
  

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const ultimo = currentPage * productsPerPage;
  const primero = ultimo - productsPerPage;
  const products = filterProducts.slice(primero, ultimo);

  const setPagination = (page) => {
    return setCurrentPage(page);
  };

  return (
    <div>
      <NavBar />
      <FilterNavBar />
      <Filter />

      <div className={style.container}>
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
          <p className={style.loading}>LOADING...</p>
        )}
      </div>

      <Paginate
        productsPerPage={productsPerPage}
        allProducts={filterProducts.length}
        setPagination={setPagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
  }