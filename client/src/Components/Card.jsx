import React from 'react'
import styled from "./Card.module.css"
import img from "../Components/Img/img.jfif"






function Card(props) {
  return (
    <div className={styled.h}>
    <div className={styled.container}>
<img src={img} alt="" />
<p>$299</p>
<p className={styled.p1}>Mismo precio en 3 cuotas de $99</p>
<p className={styled.p}>Envio gratis</p>

    </div>
    </div>
  )
}

export default Card