import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/Actions";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import "./styles/detail.css";
import { MdOutlineStar } from "react-icons/md";

export default function Detail() {

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [dispatch, id])

    const product = useSelector(store => store.productDetail)

    let name, image = [], price, size = [], description, category, gender;

    if (product) {
        name = product.name
        price = product.price
        description = product.description,
            category = product.category,
            size = product.size,
            gender = product.gender

        if (product.image) {
            image = [...product.image]
        }
    }

    const [ sliderImg, setSliderImg ] = useState(image[0])

    const handleClick = (index) => {
        console.log(index);
        const slider = image[index];
        setSliderImg(slider)
    }

    return (

        <div className="flex-box">
            <div className="left">
                <div className="big-img">
                    <img src={sliderImg} alt=""/>
                </div>
                <div className="images">
                    {
                        image.map((im, i) => {
                            return (
                                <div className="small-img" key={i}>
                                    <img src={im} alt="" onClick={() => handleClick(i)}/>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className="rigth">
                <div className="pname">{name}</div>
                <div className="ratings">
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                </div>
                <div className="price">${price}</div>
                <div className="size">
                    <p>Size: </p>
                    <div className="psize active">XS</div>
                    <div className="psize">S</div>
                    <div className="psize">M</div>
                    <div className="psize">L</div>
                    <div className="psize">X</div>
                    <div className="psize">XL</div>
                    <div className="psize">XXL</div>
                </div>
                <div className="quantity">
                    <p>Quantity: </p>
                    <input type="number" min="1" max="5" value="1"/>
                </div>
                <div className="btn-box">
                    <button className="cart-btn">Add to cart</button>
                    <button className="buy-btn">Buy Now</button>
                </div>
            </div>
        </div>

    )
} 