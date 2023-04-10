import React from "react";
import style from "./ProductsContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProduct } from "../../redux/Actions/actions";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsContainer() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const products = useSelector((state) => state.allProducts);

  return (
    <div className={style.cardContainer}>
      {products.length &&
        products.map((product) => {
          return (
            <Link to={`/detail/${product._id}`}>
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
        })}
    </div>
  );
}
