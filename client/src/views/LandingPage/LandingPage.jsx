import React, { useEffect } from "react";
import style from "./LandingPage.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllUser } from "../../redux/Actions";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import { FaAngleDown } from "react-icons/fa";

// Imagenes
import santimassuh from "../../images/Team/santimassuh.jpeg";
import alenmuñoz from "../../images/Team/alenmuñoz.jpg";
import camiloagudelo from "../../images/Team/camiloagudelo.jpg";
import franciscobaca from "../../images/Team/franciscobaca.jpeg";
import joseatencia from "../../images/Team/joseatencia.jpeg";
import santisanchez from "../../images/Team/santisanchez.jpeg";
import sebanajle from "../../images/Team/sebanajle.jpg";

export default function LandingPage() {
  const myRef = React.useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch, location]);
  return (
    <>
      <div className={style.welcomeContainer}>
        <h1>SPORT PLANET</h1>
        <p className={style.slogan}>FIND ALL YOUR DEPORTIVE PRODUCTS HERE</p>
        <Link to="/home">
          <button className={style.buttonToHome}>LETS GO</button>
        </Link>

        <a onClick={executeScroll} className={style.arrowIcon}>
          <FaAngleDown className="icon-position icon-style" />
        </a>
      </div>

      <div className={style.teamSection} ref={myRef}>
        <h1>MEET THE TEAM</h1>
        <div className={style.teamContainer}>
          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>
              <img src={camiloagudelo} alt="" />
            </div>
            <hr></hr>
            <h2>CAMILO AGUDELO</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a href="https://github.com/rake3344" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/juan-camilo-agudelo-giraldo-957ab3245/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>
              <img src={joseatencia} />
            </div>
            <hr></hr>
            <h2>JOSE ATENCIA</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a href="https://github.com/JATENCIA" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-atencia-jaramillo-a4757b239/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>
              <img src={franciscobaca} alt="" />
            </div>
            <hr></hr>
            <h2>FRANCISCO BACA</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a href="https://github.com/franciscobaca" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>IMAGEN</div>
            <hr></hr>
            <h2>JUAN GUTIERREZ</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a href="https://github.com/JuanGutierrez95" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/juan-gutierrez95/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>
              <img src={santimassuh}></img>
            </div>
            <hr></hr>
            <h2>SANTIAGO MASSUH</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a href="https://github.com/Santiago-Massuh" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/santiagomassuh/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>
              <img src={alenmuñoz} alt="" />
            </div>
            <hr></hr>
            <h2>ALEN MUÑOZ</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a href="https://github.com/alenm777" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/al%C3%A9n-mu%C3%B1oz-107560231/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>
              <img src={sebanajle} alt="" />
            </div>
            <hr></hr>
            <h2>SEBASTIAN NAJLE</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a href="https://github.com/Sebas202070" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sebastian-rodrigo-najle-7bba34125/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className={style.teamMemberCard}>
            <div className={style.imgContainer}>
              <img src={santisanchez} alt="" />
            </div>
            <hr></hr>
            <h2>SANTIAGO SANCHEZ DE B.</h2>
            <span>FULL STACK DEVELOPER</span>
            <div className={style.memberSocialMedias}>
              <a href="https://github.com/santiagosdeb" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/santiago-a-sanchez-de-bustamante-9116531a2/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
}
