import React from 'react'
import './styles/seller.css'
export default function SellerUser({ user }) {
  return (
    <div className="card-container">
        <div className='card'>
            <div className="card-image">
                <img src={user.image} alt="" />
            </div>
            <div className="card-content">
                <h2 className="card-title">{user.name} {user.lastName}</h2>
                <p className="card-text">{user.eMail}</p>
                <p className="card-text">{user.telephone}</p>
            </div>
        </div>
    </div>
  )
}
