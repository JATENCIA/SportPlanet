import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { addReview, getAllUser } from "../../redux/Actions";
import { useSelector } from "react-redux";
import { NavBar } from "../../Components/Navbar";
import FilterNavBar from "../../Components/FilterNavBar/FilterNavBar";
import ButtonBack from "../../Components/ButtonBack/ButtonBack";
import Swal from "sweetalert2";
import "./reviews.css";


export default function Reviews() {
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useAuth0();
    const [review, setReview] = useState({
        quality: 0,
        comfort: 0,
        recommended: 0,
        comment: "",
        product: "",
        user: "",
        attention: 0,
        deliveryOnTime: 0,
        packaging: 0,
    });

    useEffect(() => {
        dispatch(getAllUser());
    }, [dispatch]);

    const users = useSelector((state) => state.allUsers);
    const userDb = users?.find((elem) => elem.eMail === user?.email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateReview = {
            ...review,
            // product: "6432598378fa18b04967c1f2",
            user: userDb._id,
        };

        try {
            await dispatch(addReview(updateReview));
            setReview(updateReview);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Review added successfully",
                showConfirmButton: false,
                timer: 1500,
            })
            
        } catch (error) {
            console.log("Error adding review", error);
        }
    };


    return (
        <>
            <NavBar />
            <FilterNavBar />
            <div className="wrapper">
                <div className="buttonBack">
                    <ButtonBack />
                </div>
                <div className="title">Leave a review</div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="inputfield">
                            <label htmlFor="quality">Quality:</label>
                            <div className="custom_select">
                                <select
                                    id="quality"
                                    value={review.quality}
                                    onChange={(e) =>
                                        setReview({ ...review, quality: Number(e.target.value) })
                                    }
                                >
                                    <option value="">Quality</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>

                        <div className="inputfield">
                            <label htmlFor="comfort">Comfort:</label>
                            <div className="custom_select">
                                <select
                                    id="comfort"
                                    value={review.comfort}
                                    onChange={(e) =>
                                        setReview({ ...review, comfort: Number(e.target.value) })
                                    }
                                >
                                    <option value="">Comfort</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>

                        <div className="inputfield">
                            <label htmlFor="recommended">
                                How much you recommended this product
                            </label>
                            <div className="custom_select">
                                <select
                                    id="recommended"
                                    value={review.recommended}
                                    onChange={(e) =>
                                        setReview({
                                            ...review,
                                            recommended: Number(e.target.value),
                                        })
                                    }
                                >
                                    <option value="">Recommended</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>

                        <div className="inputfield">
                            <label htmlFor="comment">Comment:</label>
                            <textarea
                                id="comment"
                                value={review.comment}
                                onChange={(e) =>
                                    setReview({ ...review, comment: e.target.value })
                                }
                                className="textarea"
                            ></textarea>
                        </div>

                        <div className="inputfield">
                            <label htmlFor="attention">Attention:</label>
                            <div className="custom_select">
                                <select
                                    id="attention"
                                    value={review.attention}
                                    onChange={(e) =>
                                        setReview({ ...review, attention: Number(e.target.value) })
                                    }
                                >
                                    <option value="">Attention</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>

                        <div className="inputfield">
                            <label htmlFor="deliveryOnTime">Delivery on time:</label>
                            <div className="custom_select">
                                <select
                                    id="deliveryOnTime"
                                    value={review.deliveryOnTime}
                                    onChange={(e) =>
                                        setReview({
                                            ...review,
                                            deliveryOnTime: Number(e.target.value),
                                        })
                                    }
                                >
                                    <option value="">Delivery</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>

                        <div className="inputfield">
                            <label htmlFor="packaging">Packaging:</label>
                            <div className="custom_select">
                                <select
                                    id="packaging"
                                    value={review.packaging}
                                    onChange={(e) =>
                                        setReview({ ...review, packaging: Number(e.target.value) })
                                    }
                                >
                                    <option value="">Packaging</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>

                        <div className="inputfield">
                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

