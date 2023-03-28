import React from "react";
import { NavLink } from 'react-router-dom'

export default function ProductCard(props){
   
    return (
        <div className={styled.container}>
          <div className={styled.img}>
            <NavLink to={`/detail/${props.id}`}>
            <img  src={props.img} alt="Not Found" width="250px" height="180px" />
            </NavLink>
            </div>
            <p className={styled.p}>Nombre: {props.name}</p>
            <p className={styled.p}>Nombre: {props.precio}</p>
            <p className={styled.p}>Peso: {props.oferta}</p>
            <p className={styled.p}>Temperamentos: {props.envio}</p>
         
         </div>
      )
   
   
   

   
}



