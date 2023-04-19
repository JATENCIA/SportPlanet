import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { addReview, getAllUser} from '../../redux/Actions'
import { useSelector } from 'react-redux'
import "./reviews.css"

export default function Reviews() {

    const dispatch = useDispatch()
    const { user, isAuthenticated } = useAuth0()
    const [review, setReview] = useState({
        quality: 0,
        comfort: 0,
        recommended: 0,
        comment: '',
        product: '',
        user: '',
        attention: 0,
        deliveryOnTime: 0,
        packaging: 0
    })

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])


    const users = useSelector(state => state.allUsers)
    const userDb = users?.find(elem => elem.eMail === user?.email)

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const updateReview = {
            ...review,
            product: '643edc6c6a3f7aa668ab778c',
            user: userDb._id
        }
    
        try {
            await dispatch(addReview(updateReview))
            setReview(updateReview)
        } catch (error) {
            console.log('Error adding review', error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='review-form'>
                <h2 className='review-form__title'>Leave a review</h2>
                <div className="review-form__group">
                    <label htmlFor="quality">Quality:</label>
                    <select
                        id="quality"
                        value={review.quality}
                        onChange={e => setReview({ ...review, quality: Number(e.target.value)})}
                    >
                        <option value="">--Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="review-form__group">
                    <label htmlFor="comfort">Comfort:</label>
                    <select
                        id="comfort"
                        value={review.comfort}
                        onChange={e => setReview({ ...review, comfort: Number(e.target.value) })}
                    >
                        <option value="">--Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="review-form__group">
                    <label htmlFor="recommended">Would you recommend this product?</label>
                    <select
                        id="recommended"
                        value={review.recommended}
                        onChange={e => setReview({ ...review, recommended: Number(e.target.value) })}
                    >
                        <option value="">--Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="review-form__group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        value={review.comment}
                        onChange={e => setReview({ ...review, comment: e.target.value })}
                    ></textarea>
                </div>

                <div className="review-form__group">
                    <label htmlFor="attention">Attention:</label>
                    <select
                        id="attention"
                        value={review.attention}
                        onChange={e => setReview({ ...review, attention: Number(e.target.value) })}
                    >
                        <option value="">--Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="review-form__group">
                    <label htmlFor="deliveryOnTime">Delivery on time:</label>
                    <select
                        id="deliveryOnTime"
                        value={review.deliveryOnTime}
                        onChange={e => setReview({ ...review, deliveryOnTime: Number(e.target.value) })}
                    >
                        <option value="">--Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="review-form__group">
                    <label htmlFor="packaging">Packaging:</label>
                    <select
                        id="packaging"
                        value={review.packaging}
                        onChange={e => setReview({ ...review, packaging: Number(e.target.value) })}
                    >
                        <option value="">--Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type='submit' className="review-form__btn">Submit</button>
            </form>
        </div>
    )
}
