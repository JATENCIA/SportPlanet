import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles/related.css";

// import required modules
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';


export default function RelatedProducts({ products }) {

    return (
        <> 
            <div className='first-container'>
                <div className='slide-content'>
                    <div className='titleRelated'>
                        <h1>RELATED PRODUCTS</h1>
                    </div>
                    <div className='slider-container'>
                        <Swiper
                            slidesPerView={4}
                            centeredSlides={true}
                            spaceBetween={30}
                            pagination={{
                                "clickable": true
                            }}
                            modules={[Pagination]}
                            className='mySwiper'
                        >
                            {
                                products.map((product, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Link to={`/detail/${product._id}`} className='link'>
                                                <ProductCard
                                                id={product._id}
                                                name={product.name}
                                                image={product.productConditionals[0].image[1]}
                                                price={product.price}
                                                brands={product.brands}
                                                />
                                            </Link>
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

