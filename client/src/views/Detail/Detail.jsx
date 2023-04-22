import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getProductDetail,
  getAllProduct,
} from "../../redux/Actions";
import "./styles/detail.css";
import { GrCart } from "react-icons/gr";
import { NavBar } from "../../Components/Navbar";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Loader from "../../Components/Loader/Loader";
import RelatedProducts from "./RelatedProducts";
import ButtonBack from "../../Components/ButtonBack/ButtonBack";
import Footer from "../../Components/Footer/Footer";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUser, getAllReviews, shop } from "../../redux/Actions/actions";
import Login from "../../Components/Navbar/Login";
import SellerUser from "./SellerUser";
import FilterNavBar from "../../Components/FilterNavBar/FilterNavBar";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, user, logout } = useAuth0();

  useEffect(() => {
    dispatch(getProductDetail(id)).then(() => setIsLoading(false));
    dispatch(getAllProduct());
  }, [dispatch, id]);

  const product = useSelector((store) => store.productDetail);
  const allProducts = useSelector((store) => store.allProducts);

  const _id = product._id;

  let name,
    image = [],
    price,
    size = [],
    description,
    category,
    gender,
    brands,
    discount,
    user1,
    review;

  if (product) {
    name = product.name;
    price = product.price;
    discount = product.discount;
    (description = product.description),
      (category = product.category),
      (gender = product.gender),
      (brands = product.brands);

    if (product.productConditionals) {
      image = [...product.productConditionals[0].image];
    }

    if (product.productConditionals) {
      size = [...product.productConditionals[0].size];
    }

    if (product.user) {
      user1 = product.user;
    }

    if (product.review) {
      review = product.review;
    }
  }

  const [userE, setUserE] = useState({});

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    if (user && isAuthenticated) {
      const userDb = allUsers?.find((element) => element.eMail === user?.email);
      userDb ? setUserE(userDb) : "";
    }
  }, [user]);

  //----------------------------------------------------------------Selector de productos por color y talla -------------------------------------------------------------------//

  const [sizes, setSizes] = useState("");
  const [select, setSelect] = useState(0);

  const handleSize = (e) => {
    e.preventDefault();
    setSizes(e.target.value);
  };

  const [selectedColor, setSelectedColor] = useState(
    product.productConditionals && product.productConditionals.length > 0
      ? product.productConditionals[0].color
      : ""
  );

  const selectedProduct = product.productConditionals
    ? product.productConditionals.find(
        (product) => product.color === selectedColor
      )
    : null;
  const imagesColor = selectedProduct ? selectedProduct.image : [];
  const size2 = selectedProduct ? selectedProduct.size : [];

  const amount = size2?.find((s) => Object.keys(s) == "amount");
  useEffect(() => {
    if (sizes) {
      const stock = size2?.find((s) => Object.keys(s) == sizes);
      setSelect(stock[sizes]);
    }
  }, [sizes]);
  let productCart = {};
  if (sizes.length || amount) {
    if (amount) {
      let stock2 = amount?.amount;
      select ? select : setSelect(stock2);
    }
    let UUID = crypto.randomUUID();
    productCart = {
      id: _id,
      name: name,
      price: price,
      color: selectedProduct?.color,
      image: selectedProduct?.image[0],
      size: sizes || "amount",
      stock: select,
      discount: discount,
      UUID: UUID,
      eMail: userE.eMail,
      userID: userE._id,
      quantity: 1,
    };
  }

  const adToCart = (productCart) => {
    if (select) {
      if (isAuthenticated) {
        if (userE.baneado === false) {
          dispatch(addToCart(productCart));
        } else {
          Swal.fire(`🚫 BANNED USER`);
        }
      } else {
        Swal.fire(`⚠️ LOG IN OR REGISTER`);
      }
    } else {
      Swal.fire(`⚠️ SELECT COLOR AND SIZE`);
    }
  };
  const pay = useSelector((state) => state.buttonPay);
  const [brand, setBrand] = useState(0);
  const [bPay, setBPay] = useState("");
  useEffect(() => {
    setBPay(pay);
  }, [pay]);

  const handleShop = async ([productCart]) => {
    if (isAuthenticated) {
      if (userE.baneado === false) {
        if (Object.entries(productCart).length !== 0) {
          dispatch(shop([productCart]));
          setBrand(1);
        } else {
          Swal.fire(`NO PRODUCT SELECTED`);
        }
      } else {
        Swal.fire(`🚫 BANNED USER`);
      }
    } else {
      await Swal.fire(`⚠️ LOG IN`);
      navigate("/home");
    }
  };
  const handleClear = () => {
    setBrand(0);
    navigate("/home");
  };

  ///--------------------------------------------------------------------Filtrado de productos relacionados--------------------------------------------------------------------------//

  const filterProducts = allProducts.filter(
    (products) =>
      products.brands === brands &&
      products.category === category &&
      products._id !== _id
  );

  let arrayFilterProducts = filterProducts.slice(0, 5);
  arrayFilterProducts = arrayFilterProducts.filter((elem) => !elem.baneado);

  ///---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

  ///--------------------------------------------------------------------Promedio reviews---------------------------------------------------------------------------------------------//

  const [average, setAverage] = useState(0);
  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  const allReviews = useSelector((state) => state.reviews);

  const reviews = allReviews?.filter((r) => review?.includes(r._id));

  let qualityTotal = 0;
  let comfortTotal = 0;
  let recommendTotal = 0;

  useEffect(() => {
    if (reviews.length > 0) {
      for (let i = 0; i < reviews.length; i++) {
        const review2 = reviews[i];
        qualityTotal += review2.quality;
        comfortTotal += review2.comfort;
        recommendTotal += review2.recommended;
      }
    }
    const prom = (qualityTotal + comfortTotal + recommendTotal) / 3;
    setAverage(prom);
  }, [reviews]);

  ///---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

  const ShowProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
      <>
        <div className="container">
          <div className="back">
            <ButtonBack />
          </div>
          <main>
            <section className="thumbnails">
              <div
                style={{
                  width: "800px",
                  height: "1000px",
                  backgroundColor: "#fff",
                  padding: "20px",
                }}
              >
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  speed={1000}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {imagesColor.length > 0
                    ? imagesColor.map((im, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <img src={im} alt={selectedColor} key={index} />
                          </SwiperSlide>
                        );
                      })
                    : image.map((im, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <img src={im} alt="" key={index} />
                          </SwiperSlide>
                        );
                      })}
                </Swiper>
              </div>
            </section>
            {/* content */}
            <section className="content">
              <p className="company">{brands}</p>
              <Rating name="read-only" value={Math.round(average)} readOnly />
              <h1 className="title">{name}</h1>
              <p className="info">{description}</p>
              <div className="price">
                <div className="new-price">
                  <p className="now">💲 {price}</p>
                </div>
              </div>
              <div className="colors">
                {product.productConditionals?.map((c, i) => {
                  if (c.color !== "") {
                    return (
                      <button
                        className="color-btn"
                        key={i}
                        style={{ backgroundColor: c.color }}
                        onClick={() => setSelectedColor(c.color)}
                      ></button>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="sizes">
                {!amount
                  ? size2.map((s, i) => {
                      const sizeName = Object.keys(s);
                      const sizeQuantity = Object.values(s);
                      const isSizeAvailable = amount
                        ? amount[sizeName] > 0
                        : sizeQuantity > 0;
                      return (
                        <button
                          className={`size-btn ${
                            sizeName == sizes ? "selected-size-btn" : ""
                          }`}
                          value={sizeName}
                          key={i}
                          onClick={handleSize}
                          disabled={!isSizeAvailable}
                        >
                          {sizeName}
                        </button>
                      );
                    })
                  : ""}
              </div>
              {!amount ? (
                select > 0 ? (
                  <div className="cantidad">
                    <strong>
                      <p>Amount</p>
                    </strong>
                    <h5>{select} available</h5>
                  </div>
                ) : (
                  ""
                )
              ) : (
                <div className="cantidad">
                  <strong>
                    <p>Amount</p>
                  </strong>
                  <h5>{amount.amount} available</h5>
                </div>
              )}
              <div className="buttons">
                <button
                  className="add_btn"
                  onClick={() => adToCart(productCart)}
                  disabled={!size}
                >
                  <GrCart />
                  ADD TO CART
                </button>
              </div>
              <div>
                <button
                  className="buttonPay"
                  onClick={() => handleShop([productCart])}
                >
                  CHECKOUT
                </button>
                {brand !== 0 ? (
                  <a href={bPay} target="_blank">
                    {" "}
                    <button
                      className="buttonPay2"
                      onClick={() => handleClear()}
                    >
                      GO PAY
                    </button>
                  </a>
                ) : null}
              </div>
            </section>
          </main>
        </div>
      </>
    );
  };

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <>
          <NavBar />
          <FilterNavBar />

          {/* <SellerUser user={user1} /> */}
          <ShowProduct />
          <div className="related-container">
            <RelatedProducts products={arrayFilterProducts} />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
