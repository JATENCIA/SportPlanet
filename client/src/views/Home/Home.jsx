import { Produts } from "../../Components/Produts";
import SlidePromos from "../../Components/SlidePromos/SlidePromos";
import Categories from "../../Components/Categories/Categories";
import style from "./Home.module.css";
import FeaturedCardContainer from "../../Components/FeaturedCardContainer/FeaturedCardContainer";
import FilterNavBar from "../../Components/FilterNavBar/FilterNavBar";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import { NavBar } from "../../Components/Navbar";
import nikeLogo from "../../images/nikeLogo.jpg";
import adidasLogo from "../../images/adidasLogo.png";
import pumaLogo from "../../images/pumaLogo.jpeg";
import underArmour from "../../images/underArmour.jpg";
import filaLogo from "../../images/filaLogo.jpeg";
import reebokLogo from "../../images/reebokLogo.jpg";
import { addToCart, getAllUser } from "../../redux/Actions";
import { Link, useLocation } from "react-router-dom";
import ContinousText from "../../Components/ContinousText/ContinousText";
import Footer from "../../Components/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [userE, setUserE] = useState({});
  const { isAuthenticated, user, logout } = useAuth0();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch, location]);

  // const allUsers = useSelector((state) => state.allUsers);

  // useEffect(() => {
  //   if (user && isAuthenticated) {
  //     const userDb = allUsers?.find((element) => element.eMail === user?.email);
  //     userDb ? setUserE(userDb) : "";
  //   }
  // }, [user]);

  // if (isAuthenticated) {
  //   if (userE.myCart) {
  //     dispatch(addToCart(userE.myCart[0]));
  //   }
  // }

  return (
    <div className={style.main}>
      <ContinousText />
      <NavBar />
      <FilterNavBar />
      <Categories />
      <SlidePromos />
      <h1 className={style.featuredTitle}>FEATURED PRODUCTS</h1>
      <FeaturedCardContainer />
      <div className={style.secondContainer}>
        <div className={style.brandSection}>
          <h1 className={style.brandTitle}>OUR BRANDS</h1>
          <div className={style.brandContainer}>
            <Link to="/category/nike">
              <div className={style.brand}>
                <img src={nikeLogo} className={style.brandImg} />
              </div>
            </Link>

            <Link to="/category/adidas">
              <div className={style.brand}>
                <img src={adidasLogo} className={style.brandImg} />
              </div>
            </Link>

            <Link to="/category/puma">
              <div className={style.brand}>
                <img src={pumaLogo} className={style.brandImg} />
              </div>
            </Link>
          </div>

          <div className={style.brandContainer}>
            <Link to="/category/under-armour">
              <div className={style.brand}>
                <img src={underArmour} className={style.brandImg} />
              </div>
            </Link>

            <Link to="/category/fila">
              <div className={style.brand}>
                <img src={filaLogo} />
              </div>
            </Link>

            <Link to="/category/reebok">
              <div className={style.brand}>
                <img src={reebokLogo} />
              </div>
            </Link>
          </div>
        </div>
        <hr></hr>
        <br />
        <br />

        <h1 className={style.aboutUsTitle}>ABOUT SPORT PLANET</h1>
        <div className={style.aboutUsDescription}>
          <p>
            SportPlanet hosts a large online commerce of sport articules in
            LATAM. Our efforts are centered on enabling e-commerce of our
            customers by delivering a suite of technology solutions across the
            complete value chain of commerce. We are present in many countries
            such us: Argentina and Colombia. Through our e-commerce platform, we
            provide our users with robust online commerce and payments tools
            that not only contribute to the development of a large and growing
            ecommerce community in Latin America (a region with a population of
            over 650 million people and one of the fastest-growing Internet
            penetration rates in the world), but also foster entrepreneurship
            and social mobility. Our main focus is to deliver compelling
            technological and commercial solutions that address the distinctive
            cultural and geographic challenges of operating an online commerce
            and payments platform in Latin America.
          </p>
        </div>
        <br />
        <hr />
        <br />
        <br />
        {/* <h1 className={style.contactUsWpp}>CONTACT US WHATSAPP</h1>
        <a className="" href="https://chat.whatsapp.com/BBKDAQ6dZBc2FwWqkmKKFP">
          <img
            src="https://st2.depositphotos.com/1116329/7584/v/600/depositphotos_75840613-stock-illustration-vector-modern-phone-icon-in.jpg"
            width="80px"
            alt=""
          />
        </a> */}
        <br />
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};
