import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../redux/Actions";
import ProductCard from "../../ProductCard/ProductCard";
import { Paginate } from "../../Paginate/Paginate";
import { NavBar } from "../../Navbar/Navbar";
import FilterNavBar from "../../FilterNavBar/FilterNavBar";
import Filters from "../../Filters/Filters";
import { Link } from "react-router-dom";
import style from "./Suplements.module.css";
import Footer from "../../Footer/Footer";

export default function Supplements() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.filteredProducts);
  let filterProducts = allProducts.filter((product) => {
    return product.category === "supplements";
  });
 filterProducts = filterProducts.filter((product) => !product.baneado)

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
      <br />
 <div>
 <h1 className={style.h1}>Supplements</h1>
 </div>
      <Filters
        SizeFilter={false}
        GenderFilter={false}
        WearedFilter={false}
        SeasonFilter={false}
      />

      <div className={style.container}>
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <Link to={`/detail/${product._id}`} key={product._id}>
                <ProductCard
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
          <p className={style.loading}>NO ÍTEMS FOUND...</p>
        )}
      </div>

      {products.length > 0 ? (
        <Paginate
          productsPerPage={productsPerPage}
          allProducts={filterProducts.length}
          setPagination={setPagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
      <Footer />
    </div>
  );
}
