import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/Actions";
import "./styles/detail.css";
import { GrNext, GrPrevious, GrCart, GrClose } from "react-icons/gr";
import { BiMinus, BiPlus } from "react-icons/bi";

export default function Detail() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        dispatch(getProductDetail(id));
        setLoading(false)
    }, [dispatch, id])

    const product = useSelector(store => store.productDetail)

    let name, image = [], price, size = [], description, category, gender;

    if (product) {
        name = product.name
        price = product.price
        description = product.description,
        category = product.category,
        gender = product.gender

        if (product.image) {
            image = [...product.image]
        }

        if (product.size) {
            size = [...product.size]
        }
    }

    const sizeArr = []

    for (let i = 0; i < size.length; i++) {
        const key = Object.keys(size[i]).join();
        sizeArr.push(key)
    }


    const [sliderImg, setSliderImg] = useState(image[0])

    const handleClick = (index) => {
        console.log(index);
        const slider = image[index];
        setSliderImg(slider)
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="container">
                    <main>
                        {/* thumbnails */}

                        <section className="thumbnails">
                            <img src={sliderImg} alt="product" className="main-thumbnail invisible-mob" />
                            <div className="mobile-thumb hidden">
                                <img src={image[0]} alt="product" />
                                <button id="next">
                                    <GrNext />
                                </button>
                                <button id="previous">
                                    <GrPrevious />
                                </button>
                            </div>
                            <div className="preview">
                                {/* <img src={sliderImg} alt="" className="selected" /> */}
                                {/* <img src={image[1]} alt="" />
                                <img src={image[2]} alt="" /> */}
                                {
                                    image.map((im, i) => {
                                        return (
                                            <img src={im} alt="" key={i} onClick={() => handleClick(i)} />
                                        )
                                    })
                                }
                            </div>
                        </section>
                        {/* content */}

                        <section className="content">
                            <p className="company">Sport Planet</p>
                            <h1 className="title">{name}</h1>
                            <p className="info">{description}</p>
                            <div className="price">
                                <div className="new-price">
                                    <p className="now">${price}</p>
                                </div>
                            </div>
                            <div className="sizes">
                                <select>
                                    <option disabled selected defaultValue>Size</option>
                                    {
                                         sizeArr.map((s,i) => {
                                            return (
                                                <option value={s} key={i}>{s}</option>
                                            )
                                         })
                                    }
                                </select>
                            </div>
                            <div className="buttons">
                                <div className="amount-btn">
                                    <button id="minus">
                                        <BiMinus />
                                    </button>
                                    <p className="amount">0</p>
                                    <button id="plus">
                                        <BiPlus />
                                    </button>
                                </div>
                                <button className="add_btn">
                                    <GrCart />
                                    Add to cart
                                </button>
                            </div>
                        </section>
                    </main>
                </div>

                <div className="lightbox invisible">
                    <div className="lightbox-container">
                        <button className="close-lightbox">
                            <GrClose />
                        </button>
                        <img src={image[0]} alt="" className="main-thumbnail invisible-mob" />
                        <div className="preview">
                            <img src={image[0]} alt="" className="selected" />
                            <img src={image[1]} alt="" />
                            <img src={image[2]} alt="" />
                        </div>
                    </div>
                </div>
            </>

        )
    }

    return (
        <div>
            {
                loading ? <h1>Loading...</h1> : <ShowProduct />
            }
        </div>
    )
} 