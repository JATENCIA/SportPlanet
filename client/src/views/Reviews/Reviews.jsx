import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { addReview } from '../../redux/Actions'

export default function Reviews() {

    const dispatch = useDispatch()
    const { user, isAuthenticated } = useAuth0()

    const [ review, setReview ] = useState({
        quality: '',
        comfort: '',
        recommended: '',
        comment: '',
        product: '',
        user: '',
        attention: '',
        deliveryOnTime: '',
        packaging: ''
    })

    const handleChange = (e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefaul();

        if(isAuthenticated){
            dispatch(addReview(review));
            setReview({
                quality: '',
                comfort: '',
                recommended: '',
                comment: '',
                product: '',
                user: user.sub,
                attention: '',
                deliveryOnTime: '',
                packaging: ''
            })
        } else {
            alert('You must be logged in to submit a review')
        }
    }

    console.log(user);

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Quality:
            <input type="number" name="quality" value={review.quality} onChange={handleChange} />
        </label>
        <label>
            Comfort:
            <input type="number" name="comfort" value={review.comfort} onChange={handleChange} />
        </label>
        <label>
            Recommended:
            <input type="checkbox" name="recommended" checked={review.recommended} onChange={handleChange} />
        </label>
        <label>
            Comment:
            <textarea name="comment" value={review.comment} onChange={handleChange} />
        </label>
        <label>
            Product:
            <input type="text" name="product" value={review.product} onChange={handleChange} />
        </label>
        <label>
            Attention:
            <input type="number" name="attention" value={review.attention} onChange={handleChange} />
        </label>
        <label>
            Delivery on time:
            <input type="number" name="deliveryOnTime" value={review.deliveryOnTime} onChange={handleChange} />
        </label>
        <label>
            Packaging:
            <input type="number" name="packaging" value={review.packaging} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
    </form>
    )
}
