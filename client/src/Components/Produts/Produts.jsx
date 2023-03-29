import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../redux/Actions";
import { ProductItem } from "./ProductItem";

const Produts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  console.log("1", allProducts)

  const filterProducts = allProducts.filter(
    (product) => product.baneado === false
  );

  return (
    <div>
      {filterProducts?.map((product) => {
        return (
          <ProductItem
            key={crypto.randomUUID()}
            _id={product._id}
            name={product.name}
            image={product.image}
            size={product.size}
            price={product.price}
            description={product.description}
          />
        );
      })}
    </div>
  );
};

export default Produts;
