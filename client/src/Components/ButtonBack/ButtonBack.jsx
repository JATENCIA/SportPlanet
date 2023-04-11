import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import style from "./ButtonBack.module.css";

export default function ButtonBack() {
  //   const history = useHistory();
  //   const { goBack } = useHistory();
  const navigate = useNavigate();
  return (
    <>
      {/* <button onClick={() => history.goBack()}>Back</button> */}
      <button onClick={() => navigate(-1)} className={style.buttonBack}>
        <FaArrowAltCircleLeft />
      </button>
    </>
  );
}
