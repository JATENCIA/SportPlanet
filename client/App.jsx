import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar } from "./src/Components/Navbar";

import ProductCard from "./src/Components/ProductCard/ProductCard";
import LandingPage from "./src/views/LandingPage/LandingPage";
import { Home } from "./src/views/Home/Home";
import Detail from "./src/views/Detail/Detail";
import { Profile } from "./src/views/Profile";
import { Admin } from "./src/views/Admin";
import { SupAdmin } from "./src/views/SupAdmin";

// Fonts
import "./src/fonts/SportsWorld.ttf";

// Categories
import Tshirts from "./src/Components/Categories/Tshirts/Tshirts";
import Balls from "./src/Components/Categories/Balls/Balls";
import Shoes from "./src/Components/Categories/Shoes/Shoes";
import Accesories from "./src/Components/Categories/Accesories/Accesories";
import Supplements from "./src/Components/Categories/Supplements/Supplements";

const App = () => {
  const location = useLocation()
  return (
    <>
     {/*  <NavBar /> */}
      <div className="container p-4">
      {location.pathname !== "/" && <NavBar/>}
        <Routes>
          <Route exact path="/" Component={LandingPage} />
          <Route path="/home" Component={Home} />
          <Route path="/detail/:id" Component={Detail} />
          <Route path="/profile" Component={Profile} />
          <Route path="/dashboard" Component={Admin} />
          <Route path="/dashboardSuperAdmin" Component={SupAdmin} />
           <Route path="/home/categories/tShirts" Component={Tshirts}/>
          <Route path="/home/categories/balls" Component={Balls} />
          <Route path="/home/categories/shoes" Component={Shoes} />
          <Route path="/home/categories/accesories" Component={Accesories} />
          <Route path="/home/categories/supplements" Component={Supplements} />   
        </Routes>
      </div>
    </>
  );
};

export default App;
