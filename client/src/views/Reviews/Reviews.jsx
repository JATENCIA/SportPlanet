import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { addReview, getAllUser } from '../../redux/Actions'
import { useSelector } from 'react-redux'


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

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])

    const users = useSelector(state => state.allUsers)
    const [ userRe, setUserRe ] = useState({})

    useEffect(() => {
      if(user && isAuthenticated){
        const userDb = users?.find(elem => elem.eMail === user?.email)
        userDb ? setUserRe(userDb) : ""
      }
    }, [user])

    console.log(userRe._id);

    

    return (
        <>
          <form action="">
            
          </form>
        </>
    )
}
