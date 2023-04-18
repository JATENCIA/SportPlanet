import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUser } from "../../../redux/Actions/actions";
import { NavBar } from "../../../Components/Navbar/Navbar";
import FilterNavBar from "../../../Components/FilterNavBar/FilterNavBar";
import style from "./sellProduct.module.css";
import Swal from "sweetalert2";
import Dropzone from "react-dropzone";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { postProduct } from "../../../redux/Actions";

export default function SellProduct() {
  const dispatch = useDispatch();
  const location = useLocation();

  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const [secondImage, setSecondImage] = useState([]);
  const [thirdImage, setThirdImage] = useState([]);
  const [loading, setLoading] = useState("");
  const { isAuthenticated, user, logout } = useAuth0();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch, location]);

  const allUsers = useSelector((state) => state.allUsers);
  const userDb = allUsers?.find((element) => element.eMail === user?.email);

  const [flagPage1, setFlagPage1] = useState(true);
  const [flagPage2, setFlagPage2] = useState(false);
  const [flagPage3, setFlagPage3] = useState(false);
  const [flagPage4, setFlagPage4] = useState(false);

  const [colorFlag, setColorFlag] = useState(false);
  const [secondColorFlag, setSecondColorFlag] = useState(false);
  const [thirdColorFlag, setThirdColorFlag] = useState(false);

  const [post, setPost] = useState({
    name: "",
    productConditionals: [],
    price: "",
    description: "",
    season: "",
    category: "",
    gender: "",
    state: "",
    brands: "",
    discount: 0,
    user: userDb?._id,
  });
  const [sizes, setSizes] = useState({
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
  });
  const [secondSizes, setSecondSizes] = useState({
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
  });
  const [thirdSizes, setThirdSizes] = useState({
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
  });
  const [shoes, setShoes] = useState({});
  const [secondShoes, setSecondShoes] = useState({});
  const [thirdShoes, setThirdShoes] = useState({});

  const [amount, setAmount] = useState(0);
  const [secondAmount, setSecondAmount] = useState(0);
  const [thirdAmount, setThirdAmount] = useState(0);

  const [color, setColor] = useState("");
  const [secondColor, setSecondColor] = useState("");
  const [thirdColor, setThirdColor] = useState("");

  const [errors1, setErrors1] = useState({});
  const [errors2, setErrors2] = useState({});
  const [errors3, setErrors3] = useState({});
  const [errors4, setErrors4] = useState({});

  const [categoryIsSelected, setCategoryIsSelected] = useState(false);

  const actualYear = new Date().getFullYear();
  const yearOptions = [];
  for (let i = actualYear; i >= 1900; i--) {
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const shoesHandler = (e) => {
    setShoes({
      ...shoes,
      [e.target.name]: e.target.value,
    });
  };

  const shoesSize = [];
  for (let i = 5; i <= 13; i += 0.5) {
    shoesSize.push(
      <div key={i}>
        <select className={style.sizeSelectSinFlecha} name={i}>
          <option value={i}>{i}</option>
        </select>

        <input
          type="number"
          name={i}
          className={style.sizeNumber}
          onChange={shoesHandler}
        />
      </div>
    );
  }

  const secondShoesHandler = (e) => {
    setSecondShoes({
      ...secondShoes,
      [e.target.name]: e.target.value,
    });
  };

  const secondShoesSize = [];
  for (let i = 5; i <= 13; i += 0.5) {
    secondShoesSize.push(
      <div key={i}>
        <select className={style.sizeSelectSinFlecha} name={i}>
          <option value={i}>{i}</option>
        </select>

        <input
          type="number"
          name={i}
          className={style.sizeNumber}
          onChange={secondShoesHandler}
        />
      </div>
    );
  }
  const thirdShoesHandler = (e) => {
    setThirdShoes({
      ...thirdShoes,
      [e.target.name]: e.target.value,
    });
  };

  const thirdShoesSize = [];
  for (let i = 5; i <= 13; i += 0.5) {
    thirdShoesSize.push(
      <div key={i}>
        <select className={style.sizeSelectSinFlecha} name={i}>
          <option value={i}>{i}</option>
        </select>

        <input
          type="number"
          name={i}
          className={style.sizeNumber}
          onChange={thirdShoesHandler}
        />
      </div>
    );
  }

  const sizesChangeHandler = (e) => {
    setSizes({
      ...sizes,
      [e.target.name]: e.target.value,
    });
  };

  const secondSizesChangeHandler = (e) => {
    setSecondSizes({
      ...secondSizes,
      [e.target.name]: e.target.value,
    });
  };
  const thirdSizesChangeHandler = (e) => {
    setThirdSizes({
      ...thirdSizes,
      [e.target.name]: e.target.value,
    });
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const secondAmountHandler = (e) => {
    setSecondAmount(e.target.value);
  };

  const thirdAmountHandler = (e) => {
    setThirdAmount(e.target.value);
  };

  const changeHandlerPage1 = (event) => {
    setErrors1(validatorPage1(post));
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };
  // const changeHandlerPage2 = (event) => {
  //     setErrors2(sellValidator(post))
  //     setPost({
  //         ...post,
  //         [event.target.name]: event.target.value,
  //     });
  // };
  const changeHandlerPage3 = (event) => {
    setErrors3(validatorPage3(post));
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };
  const changeHandlerPage4 = (event) => {
    setErrors4(sellValidator(post));
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const categoryChangeHandler = (event) => {
    setErrors1(sellValidator(post));
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
    setCategoryIsSelected(true);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const e = sellValidator(post);

    if (Object.keys(e).length === 0) {
      setErrors4(e);
      try {
        await axios.post("/products", post);
        await Swal.fire(
          "Product published",
          "This item is now available for sale!",
          "success"
        );
        navigate("/post/product");
      } catch (error) {
        return { messaje: `${error}` };
      }
    } else {
      setErrors4(e);
    }
  };

  const sellValidator = (post) => {
    const errors = {};
    if (!post.season) errors.season = "Season is required!";
    if (!post.state) errors.state = "Product condition must be entered!";
    if (!post.gender) errors.gender = "Product gender is required!";
    if (!post.brands) errors.brands = "Product brand is required!";
    return errors;
  };

  const validatorPage1 = (post) => {
    const errors = {};

    if (post.name.length < 3)
      errors.name = "Product name must be higher than 3 characters!";
    if (post.name.length > 50)
      errors.name = "Product name must be less than 50 characters!";
    if (!post.name) errors.name = "Product name is required!";
    if (post.description.length > 500)
      errors.description = "Description must be less than 500 characters";
    if (post.description.length < 30)
      errors.description = "Description must be higher than 30 characters";
    if (!post.description)
      errors.description = "Product description is required!";
    if (!post.category) errors.category = "Product category is required!";

    return errors;
  };

  const validatorPage2 = (post) => {
    const errors = {};
    if (!image.length) errors.image = "At least 1 image must be entered";
    if (!color) errors.color1 = "Product dominant color is required";
    // if(!secondColor) errors.color2 =
    if (!colorFlag && !secondColorFlag && !thirdColorFlag)
      errors.color = "At least 1 color is required!";
    return errors;
  };

  const validatorPage3 = (post) => {
    const errors = {};
    if (!post.price) errors.price = "Product price is required!";
    return errors;
  };

  const clickPage1 = (event) => {
    event.preventDefault();
    const e = validatorPage1(post);
    if (Object.keys(e).length === 0) {
      setErrors1(e);
      setFlagPage1(false);
      setFlagPage2(true);
    } else {
      setErrors1(e);
    }
  };

  const clickPage2_next = (event) => {
    event.preventDefault();
    const e = validatorPage2(image);
    if (Object.keys(e).length === 0) {
      if (post.category === "tshirts" || post.category === "pants") {
        const size = Object.entries(sizes).map(([size, amount]) => ({
          [size]: amount,
        }));
        const secondSize = Object.entries(secondSizes).map(
          ([size, amount]) => ({ [size]: amount })
        );
        const thirdSize = Object.entries(thirdSizes).map(([size, amount]) => ({
          [size]: amount,
        }));
        setPost({
          ...post,
          productConditionals: [
            ...post.productConditionals,
            { color: color, image: image, size: size },
            { color: secondColor, image: secondImage, size: secondSize },
            { color: thirdColor, image: thirdImage, size: thirdSize },
          ],
        });
      } else if (post.category === "footwear") {
        const shoesSizes = Object.entries(shoes).map(([size, amount]) => ({
          [size]: amount,
        }));
        const secondShoesSizes = Object.entries(secondShoes).map(
          ([size, amount]) => ({ [size]: amount })
        );
        const thirdShoesSizes = Object.entries(thirdShoes).map(
          ([size, amount]) => ({ [size]: amount })
        );
        setPost({
          ...post,
          productConditionals: [
            ...post.productConditionals,
            { color: color, image: image, size: shoesSizes },
            { color: secondColor, image: secondImage, size: secondShoesSizes },
            { color: thirdColor, image: thirdImage, size: thirdShoesSizes },
          ],
        });
      } else {
        setPost({
          ...post,
          productConditionals: [
            ...post.productConditionals,
            { color: color, image: image, size: [{ amount: amount }] },
            {
              color: secondColor,
              image: secondImage,
              size: [{ amount: secondAmount }],
            },
            {
              color: thirdColor,
              image: thirdImage,
              size: [{ amount: thirdAmount }],
            },
          ],
        });
      }
      setErrors2(e);
      setFlagPage2(false);
      setColorFlag(false);
      setFlagPage3(true);
    } else {
      setErrors2(e);
    }
  };

  const clickPage2_previous = (e) => {
    e.preventDefault();
    setFlagPage2(false);
    setColorFlag(false);
    setFlagPage1(true);
  };

  const clickPage3_previous = (e) => {
    e.preventDefault();
    setFlagPage2(true);
    setFlagPage3(false);
    setColorFlag(true);
  };

  const clickPage3_next = (event) => {
    event.preventDefault();
    const e = validatorPage3(post);
    if (Object.keys(e).length === 0) {
      setErrors3(e);
      setFlagPage3(false);
      setFlagPage4(true);
    } else {
      setErrors3(e);
    }
  };

  const clickPage4_previous = (e) => {
    e.preventDefault();
    setFlagPage4(false);
    setFlagPage3(true);
  };

  const dropHandler = (images) => {
    const uploader = images.map(async (image) => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "sportPlanet");
      formData.append("api_key", "971367438468754");
      formData.append("timestamp", (Date.now() / 1000) | 0);
      setLoading("true");
      const post = await axios.post(
        "https://api.cloudinary.com/v1_1/santiagosdeb/image/upload",
        formData,
        {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        }
      );
      const data = post.data;
      const fileURL = data.secure_url;
      setImage((prevImages) => [...prevImages, fileURL]);

      axios.all(uploader).then(() => {
        setLoading("false");
      });
    });
  };

  const imagePreview = () => {
    if (loading === "true") {
      return <h3 className="text-center">Loading images...</h3>;
    }
    if (loading === "false") {
      return (
        <div className="mt-4">
          {!image.length ? (
            <p>There is no images uploaded</p>
          ) : (
            <div className="flex flex-wrap">
              {image.map((img, index) => (
                <img
                  src={img}
                  className="w-1/4 h-32 object-cover m-2"
                  alt={`Product Image ${index + 1}`}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      );
    }
  };

  const colorHandler = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  };

  const secondDropHandler = (images) => {
    const uploader = images.map(async (image) => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "sportPlanet");
      formData.append("api_key", "971367438468754");
      formData.append("timestamp", (Date.now() / 1000) | 0);
      setLoading("true");
      const post = await axios.post(
        "https://api.cloudinary.com/v1_1/santiagosdeb/image/upload",
        formData,
        {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        }
      );
      const data = post.data;
      const fileURL = data.secure_url;
      setSecondImage((prevImages) => [...prevImages, fileURL]);

      axios.all(uploader).then(() => {
        setLoading("false");
      });
    });
  };

  const secondImagePreview = () => {
    if (loading === "true") {
      return <h3 className="text-center">Loading images...</h3>;
    }
    if (loading === "false") {
      return (
        <div className="mt-4">
          {!secondImage.length ? (
            <p className="text-center">There is no images uploaded</p>
          ) : (
            <div className="flex flex-wrap">
              {secondImage.map((img, index) => (
                <img
                  src={img}
                  className="w-1/4 h-32 object-cover m-2"
                  alt={`Product Image ${index + 1}`}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      );
    }
  };

  const secondColorHandler = (e) => {
    e.preventDefault();
    setSecondColor(e.target.value);
  };
  const thirdColorHandler = (e) => {
    e.preventDefault();
    setThirdColor(e.target.value);
  };

  const thirdDropHandler = (images) => {
    const uploader = images.map(async (image) => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "sportPlanet");
      formData.append("api_key", "971367438468754");
      formData.append("timestamp", (Date.now() / 1000) | 0);
      setLoading("true");
      const post = await axios.post(
        "https://api.cloudinary.com/v1_1/santiagosdeb/image/upload",
        formData,
        {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        }
      );
      const data = post.data;
      const fileURL = data.secure_url;
      setThirdImage((prevImages) => [...prevImages, fileURL]);

      axios.all(uploader).then(() => {
        setLoading("false");
      });
    });
  };

  const thirdImagePreview = () => {
    if (loading === "true") {
      return <h3 className="text-center">Loading images...</h3>;
    }
    if (loading === "false") {
      return (
        <div className="mt-4">
          {!thirdImage.length ? (
            <p className="text-center">There is no images uploaded</p>
          ) : (
            <div className="flex flex-wrap">
              {thirdImage.map((img, index) => (
                <img
                  src={img}
                  className="w-1/4 h-32 object-cover m-2"
                  alt={`Product Image ${index + 1}`}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      );
    }
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch, location]);

  return (
    <>
      <NavBar />
      <FilterNavBar />
      <div className={style.formContainer}>
        <form onSubmit={submitHandler}>
          {flagPage1 && (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-5 text-center border-b-2 border-gray-900">
                Post the product you want to sell!
              </h1>

              <div>
                <label className="block text-gray-800 text-xl font-bold">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={post.name}
                  onChange={changeHandlerPage1}
                  className={style.input}
                />
                <p className={style.errors}>{errors1.name}</p>
              </div>

              <div className="mt-5">
                <label className="block text-gray-800 text-xl font-bold">
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  value={post.description}
                  onChange={changeHandlerPage1}
                  className={style.input}
                />
                <p className={style.errors}>{errors1.description}</p>
              </div>

              <div className="mt-5">
                <label className="block text-gray-800 text-xl font-bold">
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
                  <option value="gym">Fitness</option>
                  <option value="accessories">Accesories</option>
                </select>
                <p className={style.errors}>{errors1.category}</p>
              </div>

              <div className="mt-8">
                {" "}
                <button
                  onClick={clickPage1}
                  className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-auto block"
                >
                  NEXT PAGE
                </button>{" "}
              </div>
            </>
          )}

          {flagPage2 && (
            <>
              <p className={style.errors}>{errors2.color}</p>
              {colorFlag ? (
                <>
                  <div className="mt-5">
                    <h1 className="text-3xl font-bold text-gray-700 mb-5 text-center">
                      First Color
                    </h1>
                    <label className="block text-gray-800 text-xl font-bold">
                      Product Color
                    </label>

                    <select
                      onChange={colorHandler}
                      className={style.input}
                      value={color}
                    >
                      <option value="" className="bg-white text-black-400">
                        Select a color
                      </option>
                      <option value="purple" className={style.coloresPurple}>
                        Purple
                      </option>
                      <option value="blue" className={style.coloresBlue}>
                        Blue
                      </option>
                      <option
                        value="lightBlue"
                        className={style.coloresLightBlue}
                      >
                        Light Blue
                      </option>
                      <option value="green" className={style.coloresGreen}>
                        Green
                      </option>
                      <option value="yellow" className={style.coloresYellow}>
                        Yellow
                      </option>
                      <option value="orange" className={style.coloresOrange}>
                        Orange
                      </option>
                      <option value="red" className={style.coloresRed}>
                        Red
                      </option>
                      <option value="white" className={style.coloresWhite}>
                        White
                      </option>
                      <option value="gray" className={style.coloresGray}>
                        Gray
                      </option>
                      <option value="black" className={style.coloresBlack}>
                        Black
                      </option>
                      <option value="brown" className={style.coloresBrown}>
                        Brown
                      </option>
                    </select>
                    <p className={style.errors}>{errors2.color1}</p>
                  </div>

                  <div className="mt-5">
                    <label className="block text-gray-800 text-xl font-bold">
                      Image
                    </label>

                    <div className={style.uploadContainer}>
                      <Dropzone
                        className={style.dropzone}
                        onChange={(e) => setImage(e.target.value)}
                        onDrop={dropHandler}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <section className={style.dropzone}>
                            <div {...getRootProps()}>
                              <input {...getInputProps()} />
                              <span>
                                <i className="fa-regular fa-folder"></i>
                              </span>
                              <p>
                                Drop your images here, or click to select them.
                              </p>
                            </div>
                          </section>
                        )}
                      </Dropzone>
                      {imagePreview()}
                    </div>

                    {/* <input type='text' name='image' onChange={imageChangeHandler} className={style.input}/> */}
                    <p className={style.errors}>{errors2.image}</p>
                  </div>

                  {categoryIsSelected && (
                    <>
                      {post.category === "tshirts" ||
                      post.category === "pants" ? (
                        <div className="mt-5">
                          <label className="block text-gray-800 text-xl font-bold">
                            Size
                          </label>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>S</option>
                            </select>
                            <input
                              type="number"
                              value={sizes.S !== 0 ? sizes.S : ""}
                              onChange={sizesChangeHandler}
                              name="S"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>M</option>
                            </select>
                            <input
                              type="number"
                              value={sizes.M !== 0 ? sizes.M : ""}
                              onChange={sizesChangeHandler}
                              name="M"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>L</option>
                            </select>
                            <input
                              type="number"
                              value={sizes.L !== 0 ? sizes.L : ""}
                              onChange={sizesChangeHandler}
                              name="L"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>XL</option>
                            </select>
                            <input
                              type="number"
                              value={sizes.XL !== 0 ? sizes.XL : ""}
                              onChange={sizesChangeHandler}
                              name="XL"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>XXL</option>
                            </select>
                            <input
                              type="number"
                              value={sizes.XXL !== 0 ? sizes.XXL : ""}
                              onChange={sizesChangeHandler}
                              name="XXL"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>
                        </div>
                      ) : post.category === "footwear" ? (
                        <div className="mt-5">
                          <label className="block text-gray-800 text-xl font-bold">
                            Size
                          </label>
                          {shoesSize}
                        </div>
                      ) : (
                        <div className="mt-5">
                          <label className="block text-gray-800 text-xl font-bold">
                            Amount
                          </label>
                          <input
                            type="number"
                            className={style.input}
                            value={amount !== 0 ? amount : ""}
                            onChange={amountHandler}
                            min="0"
                          />
                        </div>
                      )}
                    </>
                  )}
                </>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setColorFlag(true);
                  }}
                  className="border border-dashed border-gray-500 py-2 px-4 rounded mx-auto block"
                >
                  {" "}
                  + Add new color
                </button>
              )}

              <hr className="border border-dotted border-gray-500" />

              {secondColorFlag ? (
                <>
                  <div className="mt-5">
                    <h1 className="text-3xl font-bold text-gray-700 mb-5 text-center">
                      Second Color
                    </h1>

                    <label className="block text-gray-800 text-xl font-bold">
                      Product Color
                    </label>
                    <select
                      onChange={secondColorHandler}
                      className={style.input}
                      value={secondColor}
                    >
                      <option value="" className="bg-white text-black-400">
                        Select a color
                      </option>
                      <option value="purple" className={style.coloresPurple}>
                        Purple
                      </option>
                      <option value="blue" className={style.coloresBlue}>
                        Blue
                      </option>
                      <option
                        value="lightBlue"
                        className={style.coloresLightBlue}
                      >
                        Light Blue
                      </option>
                      <option value="green" className={style.coloresGreen}>
                        Green
                      </option>
                      <option value="yellow" className={style.coloresYellow}>
                        Yellow
                      </option>
                      <option value="orange" className={style.coloresOrange}>
                        Orange
                      </option>
                      <option value="red" className={style.coloresRed}>
                        Red
                      </option>
                      <option value="white" className={style.coloresWhite}>
                        White
                      </option>
                      <option value="gray" className={style.coloresGray}>
                        Gray
                      </option>
                      <option value="black" className={style.coloresBlack}>
                        Black
                      </option>
                      <option value="brown" className={style.coloresBrown}>
                        Brown
                      </option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <label className="block text-gray-800 text-xl font-bold">
                      Image
                    </label>

                    <div className={style.uploadContainer}>
                      <Dropzone
                        className={style.dropzone}
                        onChange={(e) => setSecondImage(e.target.value)}
                        onDrop={secondDropHandler}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <section className={style.dropzone}>
                            <div {...getRootProps()}>
                              <input {...getInputProps()} />
                              <span>
                                <i className="fa-regular fa-folder"></i>
                              </span>
                              <p>
                                Drop your images here, or click to select them.
                              </p>
                            </div>
                          </section>
                        )}
                      </Dropzone>
                      {secondImagePreview()}
                    </div>

                    <p className={style.errors}>{errors2.image}</p>
                  </div>

                  {categoryIsSelected && (
                    <>
                      {post.category === "tshirts" ||
                      post.category === "pants" ? (
                        <div className="mt-5">
                          <label className="block text-gray-800 text-xl font-bold">
                            Size
                          </label>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>S</option>
                            </select>
                            <input
                              type="number"
                              value={secondSizes.S !== 0 ? secondSizes.S : ""}
                              onChange={secondSizesChangeHandler}
                              name="S"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>M</option>
                            </select>
                            <input
                              type="number"
                              value={secondSizes.M !== 0 ? secondSizes.M : ""}
                              onChange={secondSizesChangeHandler}
                              name="M"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>L</option>
                            </select>
                            <input
                              type="number"
                              value={secondSizes.L !== 0 ? secondSizes.L : ""}
                              onChange={secondSizesChangeHandler}
                              name="L"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>XL</option>
                            </select>
                            <input
                              type="number"
                              value={secondSizes.XL !== 0 ? secondSizes.XL : ""}
                              onChange={secondSizesChangeHandler}
                              name="XL"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>XXL</option>
                            </select>
                            <input
                              type="number"
                              value={
                                secondSizes.XXL !== 0 ? secondSizes.XXL : ""
                              }
                              onChange={secondSizesChangeHandler}
                              name="XXL"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>
                        </div>
                      ) : post.category === "footwear" ? (
                        <div className="mt-5">
                          <label className="block text-gray-800 text-xl font-bold">
                            Size
                          </label>
                          {secondShoesSize}
                        </div>
                      ) : (
                        <div className="mt-5">
                          <label className="block text-gray-800 text-xl font-bold">
                            Amount
                          </label>
                          <input
                            type="number"
                            className={style.input}
                            value={secondAmount !== 0 ? secondAmount : ""}
                            onChange={secondAmountHandler}
                            min="0"
                          />
                        </div>
                      )}
                      {/* <p className={style.errors}>{errors.size}</p> */}
                    </>
                  )}
                </>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSecondColorFlag(true);
                  }}
                  className="border border-dashed border-gray-500 py-2 px-4 rounded mx-auto block mt-8"
                >
                  {" "}
                  + Add new color
                </button>
              )}

              <hr className="border border-dotted border-gray-500" />

              {thirdColorFlag ? (
                <>
                  <div className="mt-5">
                    <h1 className="text-3xl font-bold text-gray-700 mb-5 text-center">
                      Third Color
                    </h1>

                    <label className="block text-gray-800 text-xl font-bold">
                      Product Color
                    </label>
                    <select
                      onChange={thirdColorHandler}
                      className={style.input}
                      value={thirdColor}
                    >
                      <option value="" className="bg-white text-black-400">
                        Select a color
                      </option>
                      <option value="purple" className={style.coloresPurple}>
                        Purple
                      </option>
                      <option value="blue" className={style.coloresBlue}>
                        Blue
                      </option>
                      <option
                        value="lightBlue"
                        className={style.coloresLightBlue}
                      >
                        Light Blue
                      </option>
                      <option value="green" className={style.coloresGreen}>
                        Green
                      </option>
                      <option value="yellow" className={style.coloresYellow}>
                        Yellow
                      </option>
                      <option value="orange" className={style.coloresOrange}>
                        Orange
                      </option>
                      <option value="red" className={style.coloresRed}>
                        Red
                      </option>
                      <option value="white" className={style.coloresWhite}>
                        White
                      </option>
                      <option value="gray" className={style.coloresGray}>
                        Gray
                      </option>
                      <option value="black" className={style.coloresBlack}>
                        Black
                      </option>
                      <option value="brown" className={style.coloresBrown}>
                        Brown
                      </option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <label className="block text-gray-800 text-xl font-bold">
                      Image
                    </label>

                    <div className={style.uploadContainer}>
                      <Dropzone
                        className={style.dropzone}
                        onChange={(e) => setThirdImage(e.target.value)}
                        onDrop={thirdDropHandler}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <section className={style.dropzone}>
                            <div {...getRootProps()}>
                              <input {...getInputProps()} />
                              <span>
                                <i className="fa-regular fa-folder"></i>
                              </span>
                              <p>
                                Drop your images here, or click to select them.
                              </p>
                            </div>
                          </section>
                        )}
                      </Dropzone>
                      {thirdImagePreview()}
                    </div>

                    <p className={style.errors}>{errors2.image}</p>
                  </div>

                  {categoryIsSelected && (
                    <>
                      {post.category === "tshirts" ||
                      post.category === "pants" ? (
                        <div className="mt-5">
                          <label className="block text-gray-800 text-xl font-bold">
                            Size
                          </label>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>S</option>
                            </select>
                            <input
                              type="number"
                              value={thirdSizes.S !== 0 ? thirdSizes.S : ""}
                              onChange={thirdSizesChangeHandler}
                              name="S"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>M</option>
                            </select>
                            <input
                              type="number"
                              value={thirdSizes.M !== 0 ? thirdSizes.M : ""}
                              onChange={thirdSizesChangeHandler}
                              name="M"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>L</option>
                            </select>
                            <input
                              type="number"
                              value={thirdSizes.L !== 0 ? thirdSizes.L : ""}
                              onChange={thirdSizesChangeHandler}
                              name="L"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>XL</option>
                            </select>
                            <input
                              type="number"
                              value={thirdSizes.XL !== 0 ? thirdSizes.XL : ""}
                              onChange={thirdSizesChangeHandler}
                              name="XL"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>

                          <div>
                            <select className={style.sizeSelectSinFlecha}>
                              <option>XXL</option>
                            </select>
                            <input
                              type="number"
                              value={thirdSizes.XXL !== 0 ? thirdSizes.XXL : ""}
                              onChange={thirdSizesChangeHandler}
                              name="XXL"
                              className={style.sizeNumber}
                              min="0"
                            />
                          </div>
                        </div>
                      ) : post.category === "footwear" ? (
                        <div className="mt-5">
                          <label className="block text-gray-800 text-xl font-bold">
                            Size
                          </label>
                          {thirdShoesSize}
                        </div>
                      ) : (
                        <div className="mt-5">
                          <label className="block text-gray-800 text-xl font-bold">
                            Amount
                          </label>
                          <input
                            type="number"
                            className={style.input}
                            value={thirdAmount !== 0 ? thirdAmount : ""}
                            onChange={thirdAmountHandler}
                            min="0"
                          />
                        </div>
                      )}
                      {/* <p className={style.errors}>{errors.size}</p> */}
                    </>
                  )}
                </>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setThirdColorFlag(true);
                  }}
                  className="border border-dashed border-gray-500 py-2 px-4 rounded mx-auto block mt-8"
                >
                  {" "}
                  + Add new color
                </button>
              )}

              <div className="mt-8 flex">
                <button
                  onClick={clickPage2_previous}
                  className="hover:bg-gray-700 hover:text-white text-gray-700 font-bold py-2 px-4 rounded mx-auto block border border-gray-700"
                >
                  PREVIOUS PAGE
                </button>
                <button
                  onClick={clickPage2_next}
                  className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-auto block"
                >
                  NEXT PAGE
                </button>
              </div>
            </>
          )}

          {flagPage3 && (
            <>
              <div className="mt-5">
                <label className="block text-gray-800 text-xl font-bold">
                  Set a Price
                </label>
                <div>
                  <select className={style.sizeSelectSinFlecha}>
                    <option>USD</option>
                  </select>
                  <input
                    type="number"
                    name="price"
                    value={post.price}
                    onChange={changeHandlerPage3}
                    className={style.sizeNumber}
                    min="0"
                  />
                </div>
                <p className={style.errors}>{errors3.price}</p>
              </div>

              <div className="mt-8 flex">
                <button
                  onClick={clickPage3_previous}
                  className="hover:bg-gray-700 hover:text-white text-gray-700 font-bold py-2 px-4 rounded mx-auto block border border-gray-700"
                >
                  PREVIOUS PAGE
                </button>
                <button
                  onClick={clickPage3_next}
                  className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-auto block"
                >
                  NEXT PAGE
                </button>
              </div>
            </>
          )}

          {flagPage4 && (
            <>
              <div className="mt-5">
                <label className="block text-gray-800 text-xl font-bold">
                  Season
                </label>
                <select
                  onChange={changeHandlerPage4}
                  name="season"
                  value={post.season}
                  className={style.input}
                >
                  <option disabled> </option>
                  {yearOptions}
                </select>
                <p className={style.errors}>{errors4.season}</p>
              </div>

              <div className="mt-5">
                <label className="block text-gray-800 text-xl font-bold">
                  Gender
                </label>
                <select
                  onChange={changeHandlerPage4}
                  name="gender"
                  value={post.gender}
                  className={style.input}
                >
                  <option disabled> </option>
                  <option value="unisex">Unisex</option>
                  <option value="women">Women</option>
                  <option value="men">Men</option>
                </select>
                <p className={style.errors}>{errors4.gender}</p>
              </div>

              <div className="mt-5">
                <label className="block text-gray-800 text-xl font-bold">
                  Condition
                </label>
                <select
                  onChange={changeHandlerPage4}
                  name="state"
                  value={post.state}
                  className={style.input}
                >
                  <option disabled> </option>
                  <option value="new">New</option>
                  <option value="used">Used</option>
                </select>
                <p className={style.errors}>{errors4.state}</p>
              </div>

              <div className="mt-5">
                <label className="block text-gray-800 text-xl font-bold">
                  Brand
                </label>
                <select
                  onChange={changeHandlerPage4}
                  name="brands"
                  value={post.brands}
                  className={style.input}
                >
                  <option disabled> </option>
                  <option value="ADIDAS">Adidas</option>
                  <option value="NIKE">Nike</option>
                  <option value="PUMA">Puma</option>
                  <option value="REEBOK">Reebok</option>
                  <option value="UNDER ARMOUR">Under Armour</option>
                  <option value="FILA">Fila</option>
                  <option value="OTHER">Other</option>
                </select>
                <p className={style.errors}>{errors4.brands}</p>
              </div>

              <div className="mt-8 flex">
                <button
                  onClick={clickPage4_previous}
                  className="hover:bg-gray-700 hover:text-white text-gray-700 font-bold py-2 px-4 rounded mx-auto block border border-gray-700"
                >
                  PREVIOUS PAGE
                </button>
                <button
                  type="submit"
                  className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-auto block"
                >
                  POST THIS PRODUCT
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
}
