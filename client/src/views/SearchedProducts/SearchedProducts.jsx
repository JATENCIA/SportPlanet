import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getSearchedProducts } from "../../redux/Actions/actions";
import style from './searchedProducts.module.css'

const SearchedProducts = () => {
    const dispatch = useDispatch();
    const searchedProducts = useSelector(state=>state.searchedProducts)
    const { product } = useParams();
    
    useEffect(()=>{
        dispatch(getSearchedProducts(product))

        //return para limpiar searchedProducts
    },[dispatch, product])

    return(
        <div className={style.container}>
            {searchedProducts.map((product, index) => {
            return(
                <div key={index}>
                    <img src={product.image[0]} alt='Product Image'/>
                    <h1>{product.name}</h1>
                    <h3>{product.price}</h3>
                </div>
            )
            })}
        </div>
    )
}

export default SearchedProducts;