import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../redux/Actions";
import { Link } from "react-router-dom";
import { NavBar } from "../../Navbar";
import FilterNavBar from "../../FilterNavBar/FilterNavBar";
import Filter from "../../Filters/Filters";
import ProductCard from "../../ProductCard/ProductCard";
import { Paginate } from "../../Paginate/Paginate";
import style from "./Gym.module.css";

export default function Gym() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const products = useSelector((state) => state.filteredProducts);

  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 10;
  const ultimo = currentPage * productsPerPage;
  const primero = ultimo - productsPerPage;
  const filteredProducts = products.slice(primero, ultimo);

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
        allProducts={filteredProducts.length}
        setPagination={setPagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
