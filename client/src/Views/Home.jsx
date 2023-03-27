import React from 'react'
import Card from '../Components/Card'
import Slide from '../Components/Slide'
import styled from "./Home.module.css"

function Home() {
  return (
    <div className={styled.container}>
<Slide/>
<div className={styled.con1}>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div>
   </div>
  )
}

export default Home