import React from "react";
import styled from "./SlidePromos.module.css";

function SlidePromos() {
  return (
    <div className={styled.slider}>
      <ul>
        <li>
          <img
            src="https://http2.mlstatic.com/storage/splinter-admin/o:f_jpg,q_auto:best/1678969548750-home-sliderdesktop.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://i.pinimg.com/736x/db/d1/31/dbd1318962e56f6009d9fdd4802aae1a.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cazaofertas.com.mx/wp-content/uploads/2021/05/Coppel-Hot-230521-01.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://ss-static-01.esmsv.com/id/145657/galeriaimagenes/obtenerimagen/?id=44&tipoEscala=stretch&width=1082&height=570"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
}

export default SlidePromos;
