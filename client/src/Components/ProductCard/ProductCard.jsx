import React from "react";
import styled from "./ProductCard.module.css"


export default function ProductCard(props){
    return (
        <div className={styled.h}>
        <div className={styled.container}>
        <NavLink to={`/detail/${props.id}`}>
        <img src={props.img} alt="Not found" />
        </NavLink>
        <p>$299{props.precio}</p>
        <p className={styled.p1}>Mismo precio en 3 cuotas de $99{props.cuotas}</p>
        <p className={styled.p}>Envio gratis{props.envio}</p>
    
        </div>
        </div>
    
    
    )
    

    
}


import React from 'react'






















