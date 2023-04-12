import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./src/views/LandingPage/LandingPage";
import { Home } from "./src/views/Home/Home";
import Detail from "./src/views/Detail/Detail";
import { Profile } from "./src/views/Profile";
import Admin from "./src/views/Admin/Admin";
import AdminProducts from "./src/views/Admin/AdminProducts/AdminProducts";
import SearchedProducts from "./src/views/SearchedProducts/SearchedProducts";
import SellProduct from "./src/views/Forms/SellProduct/SellProduct";

// Fonts
import "./src/fonts/SportsWorld.ttf";
import "./src/fonts/Seriously.ttf";
import "./src/fonts/aBlackLives.ttf";
import "./src/fonts/RobotoThin.ttf";
import "./src/fonts/RobotoCondensed.ttf";
import "./src/fonts/Bebas.ttf";
import "./src/fonts/MetroPoliceLight.otf";
import "./src/fonts/MetroPoliceRegular.otf";
import CategorySinHardcodeo from "./src/Components/Categories/CategorySinHardcodeo/CategorySinHardcodeo";
import BrandsSinHardcodeo from "./src/Components/Categories/BrandsSinHardcodeo/BrandsSinHardcodeo";


import ProfileShopping from "./src/views/Profile/ProfileShopping/ProfileShopping";
import ProfileSales from "./src/views/Profile/ProfileSales/ProfileSales";
import ProfileFavorites from "./src/views/Profile/ProfileFavorites/ProfileFavorites";
import ProfileProducts from "./src/views/Profile/ProfileProducts/ProfileProducts";
import Promotions from "./src/Components/Categories/Promotions/Promotions";
import Fitness from "./src/Components/Categories/Fitness/Fitness";

import ProfileReviews from "./src/views/Profile/ProfileReviews/ProfileReviews";
import AdminShopping from "./src/views/Admin/AdminShopping/AdminShopping";
import AdminSales from "./src/views/Admin/AdminSales/AdminSales";
import AdminReviews from "./src/views/Admin/AdminReviews/AdminReviews";
import AdminFavorites from "./src/views/Admin/AdminFavorites/AdminFavorites";
import AllUsers from "./src/views/Admin/AllUsers/AllUsers";
import AllProducts from "./src/views/Admin/AllProducts/AllProducts";
import Cart from "./src/Components/Cart";

const App = () => {
  const location = useLocation();
  return (
    <>
      {/* <NavBar /> */}
      {/* {location.pathname !== "/" && <NavBar />} */}
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route path="/home" Component={Home} />
        <Route path="/detail/:id" Component={Detail} />
        <Route path="/profile" Component={Profile} />
        <Route path="/profile/shopping" Component={ProfileShopping} />
        <Route path="/profile/sales" Component={ProfileSales} />
        <Route path="/profile/favorites" Component={ProfileFavorites} />
        <Route path="/profile/myproducts" Component={ProfileProducts} />
        <Route path="/profile/reviews" Component={ProfileReviews} />
        <Route path="/dashboard" Component={Admin} />
        <Route path="/dashboard/myproducts" Component={AdminProducts} />
        <Route path="/dashboard/shopping" Component={AdminShopping} />
        <Route path="/dashboard/sales" Component={AdminSales} />
        <Route path="/dashboard/reviews" Component={AdminReviews} />
        <Route path="/dashboard/favorites" Component={AdminFavorites} />
        <Route path="/dashboard/allusers" Component={AllUsers} />
        <Route path="/dashboard/allproducts" Component={AllProducts} />
        <Route path="products/:product" Component={SearchedProducts} />
        {/* esta seria la nuevas  */}
        <Route path="/category/:category" Component={CategorySinHardcodeo}/>
        <Route path='/brand/:brand' Component={BrandsSinHardcodeo}/>
        {/* estas serian la nuevas  */}
        <Route path="/post/product" Component={SellProduct} />
        <Route path="/cart" Component={Cart} />
        <Route path="*" Component={Home} />
      </Routes>
    </>
  );
};

export default App;
