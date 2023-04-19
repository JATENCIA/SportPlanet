import React from "react";
import style from "./Footer.module.css";
import adidasLogo from "../../images/adidasLogo.png";
import nikeLogo from "../../images/nikeLogo.jpg";
import reebok from "../../images/reebokLogo.jpg";
import fila from "../../images/filaLogo.jpeg";
import puma from "../../images/pumaLogo.jpeg";
import underarmour from "../../images/underArmour.jpg";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.firstContainer}>
        <div className={style.infoContainer}>
          <h3>CONTACT INFORMATION</h3>
          <Link to="https://chat.whatsapp.com/BBKDAQ6dZBc2FwWqkmKKFP">
          <span>Contact us</span>
          </Link>
        </div>

        <div className={style.infoContainer}>
          <h3>CUSTOMER SUPPORT</h3>
          <Link to="/faq">
            <span>FAQ</span>
          </Link>
          <span>Shipping & Returns</span>
        </div>

        <div className={style.infoContainer}>
          <h3>TERMS & CONDITIONS</h3>
          <Link to="/terms">
            <span>TERMS OF USE</span>
          </Link>
          <Link to="/policy">
            <span>OUR POLICY</span>
          </Link>
        </div>

        <div className={style.infoContainer}>
          <h3>FOLLOW US</h3>
          <div className={style.socialContainer}>
            <i>
              <FaTwitter />
            </i>

            <i>
              <FaGithub />
            </i>
            <i>
              <FaInstagram />
            </i>
          </div>
        </div>
      </div>

      <div className={style.brandsContainer}>
        <img src={adidasLogo} />
        <img src={reebok} />
        <img src={nikeLogo} />
        <img src={fila} />
      </div>
      <div className={style.copyrightsContainer}>
        <span>Copyright ©2023 Sport Planet. All rights reserved.</span>
      </div>
    </div>
  );
}
