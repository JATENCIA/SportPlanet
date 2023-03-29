import React from 'react'
import styled from "./SlidePromos.module.css"

function SlidePromos() {
  return (
    <div className={styled.slider}>
        <ul >
            <li><img src="https://http2.mlstatic.com/storage/splinter-admin/o:f_jpg,q_auto:best/1678969548750-home-sliderdesktop.jpg"alt="" /></li> 
            <li><img src="https://www.belgranostudio.com/wp-content/uploads/2022/05/Hot-Sale-PNG.png" alt="" /></li>
            <li><img src="https://assets.hotsale.com.ar/uploads/offers/232159/628e75d76d8c2.jpg?w=500&h=375" alt="" /></li>
            <li><img src="https://ss-static-01.esmsv.com/id/145657/galeriaimagenes/obtenerimagen/?id=44&tipoEscala=stretch&width=1082&height=570" alt="" /></li>
        </ul>
    </div>
  )
}

export default SlidePromos