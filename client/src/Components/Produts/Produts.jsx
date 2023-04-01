import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProduct } from "../../redux/Actions";
import { ProductItem } from "./ProductItem";

const Produts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  console.log("1", allProducts);

  const filterProducts = allProducts.filter(
    (product) => product.baneado === false
  );

  return (
    <div>
      {filterProducts?.map((product) => {
        return (
          <Link to={`/detail/${product._id}`}>
            <ProductItem
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
      })}
    </div>
  );
};

export default Produts;
