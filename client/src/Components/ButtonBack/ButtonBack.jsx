import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import style from "./ButtonBack.module.css";

export default function ButtonBack() {
  //   const history = useHistory();
  //   const { goBack } = useHistory();
  // const navigate = useNavigate();
  const handleAtrasClick = () => {
    window.history.back();
    window.scrollTo(0, 0);
  };
  return (
    <>
      {/* <button onClick={() => history.goBack()}>Back</button> */}
      <button onClick={() => handleAtrasClick()} className={style.buttonBack}>
        <FaArrowAltCircleLeft />
      </button>
    </>
  );
}
