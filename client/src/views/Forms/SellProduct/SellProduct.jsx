import React, { useState } from "react";
import style from "./sellProduct.module.css";
import { NavBar } from "../../../Components/Navbar/Navbar";
import FilterNavBar from "../../../Components/FilterNavBar/FilterNavBar.jsx";

export default function SellProduct() {
  const [post, setPost] = useState({
    name: "",
    image: [],
    price: "",
    description: "",
    season: "",
    size: [],
    category: "",
    gender: "",
    state: "",
    brand: "",
  });
  const [valueSecondImage, setValueSecondImage] = useState("");
  const [valueThirdImage, setValueThirdImage] = useState("");
  const [sizeS, setSizeS] = useState("S");
  const [amountS, setAmountS] = useState(0);
  const [sizeM, setSizeM] = useState("M");
  const [amountM, setAmountM] = useState(0);
  const [sizeL, setSizeL] = useState("L");
  const [amountL, setAmountL] = useState(0);
  const [sizeXL, setSizeXL] = useState("XL");
  const [amountXL, setAmountXL] = useState(0);
  const [sizeXXL, setSizeXXL] = useState("XXL");
  const [amountXXL, setAmountXXL] = useState(0);
  const [amount, setAmount] = useState(0);

  const [categoryIsSelected, setCategoryIsSelected] = useState(false);
  const [firstImageExist, setFirstImageExist] = useState(false);
  const [secondImageExist, setSecondImageExist] = useState(false);

  const actualYear = new Date().getFullYear();
  const yearOptions = [];
  for (let i = actualYear; i >= 1900; i--) {
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const amountSHandler = (e) => {
    setAmountS(e.target.value);
  };

  const amountMHandler = (e) => {
    setAmountM(e.target.value);
  };

  const amountLHandler = (e) => {
    setAmountL(e.target.value);
  };

  const amountXLHandler = (e) => {
    setAmountXL(e.target.value);
  };

  const amountXXLHandler = (e) => {
    setAmountXXL(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const changeHandler = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const categoryChangeHandler = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
    setCategoryIsSelected(true);
  };

  const imageChangeHandler = (e) => {
    setPost({
      ...post,
      image: [e.target.value],
    });
    setFirstImageExist(true);
  };

  const secondImageChangeHandler = (e) => {
    setValueSecondImage(e.target.value);
    setSecondImageExist(true);
  };

  const thirdImageChangeHandler = (e) => {
    setValueThirdImage(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (post.category === "tshirts" || post.category === "pants") {
      setPost({
        ...post,
        image: [...post.image, valueSecondImage, valueThirdImage],
        size: [
          {
            [sizeS]: amountS,
            [sizeM]: amountM,
            [sizeL]: amountL,
            [sizeXL]: amountXL,
            [sizeXXL]: amountXXL,
          },
        ],
      });
    } else {
      setPost({
        ...post,
        image: [...post.image, valueSecondImage, valueThirdImage],
        size: [{ amount: amount }],
      });
    }
  };

  return (
    <>
      <NavBar />
      <FilterNavBar />
      <div className={style.formContainer}>
        <form onSubmit={submitHandler}>
          <h1 className="text-3xl font-bold text-gray-800 mb-5 text-center border-b-2 border-gray-800">
            Post the product you want to sell!
          </h1>
          {console.log(post)}
          <div>
            <label className="block text-gray-700 text-xl font-bold">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={post.name}
              onChange={changeHandler}
              className={style.input}
            />
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 text-xl font-bold">
              Image
            </label>
            <input
              type="text"
              name="image"
              onChange={imageChangeHandler}
              className={style.input}
            />
          </div>

          {firstImageExist ? (
            <div>
              <input
                type="text"
                name="image"
                className={style.input}
                onChange={secondImageChangeHandler}
              />
            </div>
          ) : (
            <div></div>
          )}

          {secondImageExist ? (
            <div>
              <input
                type="text"
                name="image"
                className={style.input}
                onChange={thirdImageChangeHandler}
              />
            </div>
          ) : (
            <div></div>
          )}

          <div className="mt-5">
            <label className="block text-gray-700 text-xl font-bold">
              Set a Price
            </label>
            <div>
              <select className={style.sizeSelect}>
                <option> </option>
                <option>USD</option>
              </select>
              <input
                type="number"
                name="price"
                value={post.price}
                onChange={changeHandler}
                className={style.sizeNumber}
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 text-xl font-bold">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              value={post.description}
              onChange={changeHandler}
              className={style.input}
            />
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 text-xl font-bold">
              Season
            </label>
            <select
              onChange={changeHandler}
              name="season"
              value={post.season}
              className={style.input}
            >
              <option> </option>
              {yearOptions}
            </select>
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 text-xl font-bold">
              Category
            </label>
            <select
              onChange={categoryChangeHandler}
              name="category"
              value={post.category}
              className={style.input}
            >
              <option disabled> </option>
              <option value="tshirts">T-Shirts</option>
              <option value="pants">Pants</option>
              <option value="footwear">Shoes</option>
              <option value="balls">Balls</option>
              <option value="supplements">Supplements</option>
              <option value="accessories">Accesories</option>
            </select>
          </div>

          {categoryIsSelected && (
            <>
              {post.category === "tshirts" || post.category === "pants" ? (
                <div className="mt-5">
                  <label className="block text-gray-700 text-xl font-bold">
                    Size
                  </label>

                  <div>
                    <select defaultValue={sizeS} className={style.sizeSelect}>
                      <option>S</option>
                    </select>
                    <input
                      type="number"
                      value={amountS !== 0 ? amountS : ""}
                      onChange={amountSHandler}
                      className={style.sizeNumber}
                    />
                  </div>

                  <div>
                    <select defaultValue={sizeM} className={style.sizeSelect}>
                      <option>M</option>
                    </select>
                    <input
                      type="number"
                      value={amountM !== 0 ? amountM : ""}
                      onChange={amountMHandler}
                      className={style.sizeNumber}
                    />
                  </div>

                  <div>
                    <select defaultValue={sizeL} className={style.sizeSelect}>
                      <option>L</option>
                    </select>
                    <input
                      type="number"
                      value={amountL !== 0 ? amountL : ""}
                      onChange={amountLHandler}
                      className={style.sizeNumber}
                    />
                  </div>

                  <div>
                    <select defaultValue={sizeXL} className={style.sizeSelect}>
                      <option>XL</option>
                    </select>
                    <input
                      type="number"
                      value={amountXL !== 0 ? amountXL : ""}
                      onChange={amountXLHandler}
                      className={style.sizeNumber}
                    />
                  </div>

                  <div>
                    <select defaultValue={sizeXXL} className={style.sizeSelect}>
                      <option>XXL</option>
                    </select>
                    <input
                      type="number"
                      value={amountXXL !== 0 ? amountXXL : ""}
                      onChange={amountXXLHandler}
                      className={style.sizeNumber}
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-5">
                  <label className="block text-gray-700 text-xl font-bold">
                    Amount
                  </label>
                  <input
                    type="number"
                    className={style.input}
                    value={amount !== 0 ? amount : ""}
                    onChange={amountHandler}
                  />
                </div>
              )}
            </>
          )}

          <div className="mt-5">
            <label className="block text-gray-700 text-xl font-bold">
              Gender
            </label>
            <select
              onChange={changeHandler}
              name="gender"
              value={post.gender}
              className={style.input}
            >
              <option> </option>
              <option value="unisex">Unisex</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 text-xl font-bold">
              Condition
            </label>
            <select
              onChange={changeHandler}
              name="state"
              value={post.state}
              className={style.input}
            >
              <option> </option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 text-xl font-bold">
              Brand
            </label>
            <select
              onChange={changeHandler}
              name="brand"
              value={post.brand}
              className={style.input}
            >
              <option> </option>
              <option value="ADIDAS">Adidas</option>
              <option value="NIKE">Nike</option>
              <option value="PUMA">Puma</option>
              <option value="REBOOK">Reebok</option>
              <option value="UNDER ARMOUR">Under Armour</option>
              <option value="COLUMBIA">Columbia</option>
            </select>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block"
            >
              POST THIS PRODUCT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
