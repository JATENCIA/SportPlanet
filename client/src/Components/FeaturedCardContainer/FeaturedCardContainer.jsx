import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FeaturedCard from "../FeaturedCard/FeaturedCard.jsx";
import style from "./FeaturedCardContainer.module.css";
import { getAllProduct } from "../../redux/Actions/actions.js";

export default function FeaturedCardContainer() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  const filterProducts = allProducts.filter(product => product.price >= 1000)

  return (
    <div className={style.container}>
      {filterProducts?.map((product) => {
        return (
          <FeaturedCard
            image={product.image}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
