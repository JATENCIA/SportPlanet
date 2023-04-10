import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/Actions";
import "./styles/detail.css";
import { GrCart } from "react-icons/gr";
import { NavBar } from "../../Components/Navbar";
import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Loader from "../../Components/Loader/Loader";

export default function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();


    useEffect(() => {
        dispatch(getProductDetail(id));
    }, [dispatch, id]);


    const product = useSelector((store) => store.productDetail);

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


        if (product.size) {
            size = [...product.size];
        }

        if (product.user) {
            user = product.user;
        }
    }

    const arrColors = ["red", "blue", "green", "yellow", "pink", "black"];
    const [sizes, setSizes] = useState("");
    const [select, setSelect] = useState(0);

    const handleSize = (e) => {
        e.preventDefault();
        setSizes(e.target.value);
    }

    useEffect(() => {
        if (sizes) {
            const stock = size.find((s) => Object.keys(s) == sizes);
            setSelect(stock[sizes])
        }
    }, [sizes]);

    const amount = size.find((s) => Object.keys(s) == "amount");
    console.log(image);

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
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    {
                                        image.map((im, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <img src={im} alt="" key={index} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                                {/* <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode,Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                    {
                                        image.map((im, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    
                                                        <img src={im} alt="" key={index} />
                                                    
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper> */}
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
                                    arrColors.map((c, i) => {
                                        return (
                                            <button
                                                className="color-btn"
                                                key={i}
                                                style={{ backgroundColor: c }}
                                            >
                                            </button>
                                        )
                                    })
                                }
                            </div>

                            <div className="sizes">
                                {
                                    !amount ?
                                        size.map((s, i) => {

                                            return (
                                                <button
                                                    className="size-btn"
                                                    value={Object.keys(s)}
                                                    key={i}
                                                    onClick={handleSize}
                                                >
                                                    {Object.keys(s)}
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
                                <button className="add_btn">
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
            </>
        );
    }
}