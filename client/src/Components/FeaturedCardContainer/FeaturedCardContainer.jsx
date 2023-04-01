import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FeaturedCard from "../FeaturedCard/FeaturedCard.jsx";
import style from "./FeaturedCardContainer.module.css";
import { getAllProduct } from "../../redux/Actions/actions.js";
import { Paginate } from "../Paginate/Paginate.jsx";

export default function FeaturedCardContainer() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  const filterProducts = allProducts.filter((product) => product.price >= 1000);

  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 3;
  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const products = filterProducts.slice(firstProduct, lastProduct);

  const setPagination = (page) => {
    return setCurrentPage(page);
  };

  return (
    <div className={style.container}>
      <div className={style.productsContainer}>
        {products?.map((product) => {
          return (
            <FeaturedCard
              image={product.image[1]}
              name={product.name}
              price={product.price}
            />
          );
        })}
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
}
