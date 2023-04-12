import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProductDetail, getAllProduct } from "../../redux/Actions";
import "./styles/detail.css";
import { GrCart } from "react-icons/gr";
import { NavBar } from "../../Components/Navbar";
import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Pagination, EffectCoverflow } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import RelatedProducts from "./RelatedProducts";




export default function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();


    useEffect(() => {
        dispatch(getProductDetail(id));
        dispatch(getAllProduct());
    }, [dispatch, id]);


    const product = useSelector((store) => store.productDetail);
    const allProducts = useSelector((store) => store.allProducts);

    const _id = product._id

    const adToCart = (id) => {
        dispatch(addToCart(id))
        console.log("Add", id)
    }


    let name,
        image = [],
        price,
        size = [],
        description,
        category,
        gender,
        brands,
        user;

    if (product) {
        name = product.name;
        price = product.price;
        description = product.description,
            category = product.category,
            gender = product.gender,
            brands = product.brands

        if (product.productConditionals) {
            image = [...product.productConditionals[0].image];
        }


        if (product.productConditionals) {
            size = [...product.productConditionals[0].size];
        }

        if (product.user) {
            user = product.user;
        }
    }



    //----------------------------------------------------------------Selector de productos por color y talla -------------------------------------------------------------------//
    const [sizes, setSizes] = useState("");
    const [select, setSelect] = useState(0);

    const handleSize = (e) => {
        e.preventDefault();
        setSizes(e.target.value);
    }

    const [selectedColor, setSelectedColor] = useState(product.productConditionals && product.productConditionals.length > 0 ? product.productConditionals[0].color : '');

    const selectedProduct = product.productConditionals ? product.productConditionals.find((product) => product.color === selectedColor) : null;
    const imagesColor = selectedProduct ? selectedProduct.image : [];
    const size2 = selectedProduct ? selectedProduct.size : [];

    const amount = size2.find((s) => Object.keys(s) == "amount");
    useEffect(() => {
        if (sizes) {
            const stock = size2.find((s) => Object.keys(s) == sizes);
            setSelect(stock[sizes])
        }
    }, [sizes]);

    ///---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


    ///--------------------------------------------------------------------Filtrado de productos relacionados--------------------------------------------------------------------------//

    const filterProducts = allProducts.filter((products) => products.brands === brands && products.category === category && products._id !== _id);
    const arrayFilterProducts = filterProducts.slice(0, 6);

    ///---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//



    const ShowProduct = () => {
        const [thumbsSwiper, setThumbsSwiper] = useState(null);

        return (
            <>
                <div className="container">
                    <main>
                        <section className="thumbnails">
                            <div style={{
                                width: "800px",
                                height: "1000px",
                                backgroundColor: "#fff",
                                padding: "20px",
                            }}>
                                <Swiper
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    speed={1000}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    {
                                        imagesColor.length > 0 ?
                                            imagesColor.map((im, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <img src={im} alt={selectedColor} key={index} />
                                                    </SwiperSlide>
                                                )
                                            })
                                            :
                                            image.map((im, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <img src={im} alt="" key={index} />
                                                    </SwiperSlide>
                                                )
                                            })
                                    }
                                </Swiper>
                            </div>
                        </section>
                        {/* content */}
                        <section className="content">
                            <p className="company">{brands}</p>
                            <Rating name="read-only" value={2} readOnly />
                            <h1 className="title">{name}</h1>
                            <p className="info">{description}</p>
                            <div className="price">
                                <div className="new-price">
                                    <p className="now">${price}</p>
                                </div>
                            </div>
                            <div className="colors">
                                {
                                    product.productConditionals.map((c, i) => {
                                        if (c.color !== "") {
                                            return (
                                                <button
                                                    className="color-btn"
                                                    key={i}
                                                    style={{ backgroundColor: c.color }}
                                                    onClick={() => setSelectedColor(c.color)}
                                                >
                                                </button>
                                            )
                                        }
                                        return null;
                                    })
                                }
                            </div>

                            <div className="sizes">
                                {
                                    !amount ?
                                        size2.map((s, i) => {
                                            const sizeName = Object.keys(s);
                                            const sizeQuantity = Object.values(s);
                                            const isSizeAvailable = amount ? amount[sizeName] > 0 : sizeQuantity > 0;
                                            return (
                                                <button
                                                    className={`size-btn ${sizeName == sizes ? "selected-size-btn" : ''}`}
                                                    value={sizeName}
                                                    key={i}
                                                    onClick={handleSize}
                                                    disabled={!isSizeAvailable}
                                                >
                                                    {sizeName}
                                                </button>
                                            )
                                        })
                                        :
                                        ""
                                }
                            </div>
                            {
                                !amount ?
                                    select > 0 ?
                                        <div className="cantidad">
                                            <strong><p>Amount</p></strong>
                                            <h5>{select} available</h5>
                                        </div>
                                        :
                                        ""
                                    :
                                    <div className="cantidad">
                                        <strong><p>Amount</p></strong>
                                        <h5>{amount.amount} available</h5>
                                    </div>
                            }
                            <div className="buttons">
                                <button className="add_btn" onClick={() => adToCart(id)}>
                                    <GrCart />
                                    Add to cart
                                </button>
                            </div>
                        </section>
                    </main>
                </div>
            </>
        );
    };


    const [loading, setLoading] = useState(true);

    if (loading === true) {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    if (loading) {
        return (
            <div className="loader">
                <Loader />
            </div>
        )
    } else {
        return (
            <>
                <NavBar />
                <ShowProduct />
                <RelatedProducts products={arrayFilterProducts} />
            </>
        );
    }
}