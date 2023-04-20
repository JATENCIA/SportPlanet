import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FeaturedCard from "../FeaturedCard/FeaturedCard.jsx";
import style from "./FeaturedCardContainer.module.css";
import { getAllProduct } from "../../redux/Actions/actions.js";
import { PaginateFeatured } from "../Paginate/PaginateFeatured.jsx";
import { Link } from "react-router-dom";

export default function FeaturedCardContainer() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  let filterProducts = allProducts.filter(
    (product) =>
      product.price >= 15 &&
      product.featured === true &&
      product.baneado !== true
  );

  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 3;
  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const products = filterProducts
    .sort(() => Math.random() - 0.5)
    .slice(firstProduct, lastProduct);

  const setPagination = (page) => {
    return setCurrentPage(page);
  };

  return (
    <div className={style.container}>
      <div className={style.productsContainer}>
        {products?.map((product) => {
          return (
            <Link to={`/detail/${product._id}`} key={product._id}>
              <FeaturedCard
                image={product.productConditionals[0].image[1]}
                name={product.name}
                price={product.price}
              />
            </Link>
          );
        })}
      </div>
      {products.length > 0 ? (
        <PaginateFeatured
          productsPerPage={productsPerPage}
          allProducts={filterProducts.length}
          setPagination={setPagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </div>
  );
}
