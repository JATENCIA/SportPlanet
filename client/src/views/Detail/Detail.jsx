import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/Actions";
import "./styles/detail.css";
import { GrNext, GrPrevious, GrCart, GrClose } from "react-icons/gr";
import { BiMinus, BiPlus } from "react-icons/bi";
import { NavBar } from "../../Components/Navbar";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  const product = useSelector((store) => store.productDetail);

  let name,
    image = [],
    price,
    size = [],
    description,
    category,
    gender,
    brands;

  if (product) {
    name = product.name;
    price = product.price;
    (description = product.description),
      (category = product.category),
      (gender = product.gender),
      (brands = product.brands);

    if (product.image) {
      image = [...product.image];
    }

    if (product.size) {
      size = [...product.size];
    }
  }

  useEffect(() => {
    const thumbnails = document.querySelector(".thumbnails");
    const mainThumbnail = document.querySelector(".main-thumbnail");
    const lightbox = document.querySelector(".lightbox");
    const lightboxContainer = document.querySelector(".lightbox-container");
    const closeLightbox = document.querySelector(".close-lightbox");
    const nextBtn = document.querySelector("#next");
    const prevBtn = document.querySelector("#previous");
    const amount = document.querySelector(".amount");
    const plusBtn = document.querySelector("#plus");
    const minusBtn = document.querySelector("#minus");

    thumbnails;
    thumbnails.addEventListener("click", function (e) {
      const target = e.target;
      if (target.classList.contains("preview")) {
        return;
      }
      const selected = document.querySelector(".selected");
      selected.classList.remove("selected");
      target.classList.add("selected");
      const src = target.src;
      mainThumbnail.src = src;
      // lightboxImage.src = src;
    });

    lightbox;
    mainThumbnail.addEventListener("click", function () {
      lightbox.classList.remove("invisible");
      lightboxContainer.classList.remove("invisible");
    });
    closeLightbox.addEventListener("click", function () {
      lightbox.classList.add("invisible");
      lightboxContainer.classList.add("invisible");
    });

    // next and previous
    nextBtn.addEventListener("click", function () {
      const selected = document.querySelector(".selected");
      if (selected.nextElementSibling) {
        selected.nextElementSibling.click();
      }
    });
    prevBtn.addEventListener("click", function () {
      const selected = document.querySelector(".selected");
      if (selected.previousElementSibling) {
        selected.previousElementSibling.click();
      }
    });

    // amount
    plusBtn.addEventListener("click", function () {
      let amountValue = amount.textContent;
      amountValue++;
      amount.textContent = amountValue;
    });
    minusBtn.addEventListener("click", function () {
      let amountValue = amount.textContent;
      if (amountValue > 0) {
        amountValue--;
        amount.textContent = amountValue;
      }
    });
  });

  const ShowProduct = () => {
    return (
      <>
        <div className="container">
          <main>
            {/* thumbnails */}

            <section className="thumbnails">
              <img
                src={image[0]}
                alt="product"
                className="main-thumbnail invisible-mob"
              />
              <div className="mobile-thumb hidden">
                <img src={image[0]} alt="product" />
                <button id="next">
                  <GrNext />
                </button>
                <button id="previous">
                  <GrPrevious />
                </button>
              </div>
              <div className="preview">
                {image.map((im, i) => {
                  return <img src={im} alt="" key={i} />;
                })}
              </div>
            </section>
            {/* content */}

            <section className="content">
              <p className="company">{brands}</p>
              <h1 className="title">{name}</h1>
              <p className="info">{description}</p>
              <div className="price">
                <div className="new-price">
                  <p className="now">${price}</p>
                </div>
              </div>
              <div className="sizes">
                <select className="select">
                  <option disabled selected defaultValue>
                    Size
                  </option>
                  {size.map((s, i) => {
                    return (
                      <option value={s} key={i}>
                        {Object.keys(s)}: {Object.values(s)}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="buttons">
                <div className="amount-btn">
                  <button id="minus">
                    <BiMinus />
                  </button>
                  <p className="amount">0</p>
                  <button id="plus">
                    <BiPlus />
                  </button>
                </div>
                <button className="add_btn">
                  <GrCart />
                  Add to cart
                </button>
              </div>
            </section>
          </main>
        </div>

        <div className="lightbox invisible">
          <div className="lightbox-container">
            <button className="close-lightbox">
              <GrClose />
            </button>
            <img
              src={image[0]}
              alt=""
              className="main-thumbnail invisible-mob"
            />
            <div className="preview">
              <img src={image[0]} alt="" className="selected" />
              <img src={image[1]} alt="" />
              <img src={image[2]} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <NavBar />
      <ShowProduct />
    </>
  );
}
