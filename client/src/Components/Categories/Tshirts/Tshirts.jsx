import React from 'react'
import SlidePromos from '../../SlidePromos/SlidePromos'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProduct } from '../../../redux/Actions';
import { ProductItem } from '../../Produts';
import { Paginate } from '../../Paginate/Paginate';
import styled from "./Tshirts.module.css"





function Tshirts() {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProduct());
    }, [dispatch]);
    const allProducts = useSelector((state) => state.allProducts)
    console.log("1", allProducts)
    const filterProducts = allProducts.filter(
      (product) => product.category === "tshirts"
    );

    const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const ultimo = currentPage * productsPerPage;
  const primero = ultimo - productsPerPage;
  const products = filterProducts.slice(primero, ultimo);

  const setPagination = (page) => {
    return setCurrentPage(page);
  };


  return (
    <div>
        <SlidePromos/>
       <div>
        <ul>
            <li  className={styled.li}><img className={styled.img}  src="https://http2.mlstatic.com/D_NQ_NP_688479-MLA50108897628_052022-B.jpg"  alt="" /></li>
            <li><img src="" alt="" /></li>
        </ul>
       </div>
       {products?.map((product) => {
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

  <Paginate
   productsPerPage={productsPerPage}
   allProducts={filterProducts.length}
   setPagination={setPagination}
   currentPage={currentPage}
   setCurrentPage={setCurrentPage}
   />
       </div>
        
      
      
      
      
      
      
      
      
      
      
      
      
      
      
  )
}

export default Tshirts