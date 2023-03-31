import React from "react";
import { useSelector } from "react-redux";

const SearchedProducts = () => {
    const searchedProducts = useSelector(state=>state.searchedProducts)

    return(
        <div>
            {console.log(searchedProducts)}
            {searchedProducts.map(product => {
            return(
            <h1>{product.name}</h1>
            )
            })}
        </div>
    )
}

export default SearchedProducts;