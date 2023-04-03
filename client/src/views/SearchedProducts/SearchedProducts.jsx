import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getSearchedProducts } from "../../redux/Actions/actions";
import { ProductItem } from "../../Components/Produts/ProductItem"
import { NavBar } from "../../Components/Navbar";
import  FilterNavBar from "../../Components/FilterNavBar/FilterNavBar";
import { Link } from "react-router-dom";

const SearchedProducts = () => {
    const dispatch = useDispatch();
    const searchedProducts = useSelector(state=>state.searchedProducts)
    const { product } = useParams();
    
    useEffect(()=>{
        dispatch(getSearchedProducts(product))

        //return para limpiar searchedProducts
    },[dispatch, product])

    return(
        <div>
            <NavBar />
<FilterNavBar />
            {searchedProducts.map((product) => (
                <Link to={`/detail/${product._id}`}>
                <ProductItem
                    key={product.id} 
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    gender={product.gender}
                    state={product.state}
                    size={product.size}
                    image={product.image}
                />
               </Link>
            ))}
        </div>
    )
}

export default SearchedProducts;