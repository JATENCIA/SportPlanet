import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FeaturedCard from "../FeaturedCard/FeaturedCard.jsx";
import style from "./FeaturedCardContainer.module.css";
import { getAllProduct } from "../../redux/Actions/actions.js";
import { useState } from "react";

import { useEffect } from "react";
import { Paginatea } from "../Paginatea/Paginatea.jsx";


export default function FeaturedCardContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  const filterProducts = allProducts.filter((product) => product.price >= 40)

  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;
  const ultimo = currentPage * productsPerPage;
  const primero = ultimo - productsPerPage;
  const pagProducts = filterProducts.slice(primero, ultimo)

  const setPagination = (page) => {
    return setCurrentPage(page);
  };


  
  return (
    <div className={style.container}>
      {pagProducts?.map((product) => {
        return (
          <FeaturedCard
            image={product.image}
            name={product.name}
            price={product.price}
          />
        );
      })}
     
     
      <Paginatea
 productsPerPage={productsPerPage}
 allProducts={filterProducts.length}
 setPagination={setPagination}
 currentPage={currentPage}
 setCurrentPage={setCurrentPage}
 />
 
    </div>
  );
}
