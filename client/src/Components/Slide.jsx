import React from 'react'
import styled from "./Slide.module.css"
import img1 from "../Components/Img/1.png"
import img2 from "../Components/Img/2.jpg"
import img3 from "../Components/Img/3.jpg"
import img4 from "../Components/Img/4.jpg"


function Slide() {
  return (
    <div className={styled.slider}>
<ul className={styled.ul}>
 {   <li><img src={img1} alt="Not found"/></li>}
    <li><img src={img2} alt="" /></li>
    <li><img src={img3} alt="" /></li>
    <li><img src={img4} alt="" /></li>



</ul>
    </div>
  )
}

export default Slide