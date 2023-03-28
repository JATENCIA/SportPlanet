import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./src/Components/Navbar";

import ProductCard from "./src/Components/ProductCard/ProductCard";
import LandingPage from "./src/views/LandingPage/LandingPage";
import { Home } from "./src/views/Home/Home";
import Detail from "./src/views/Detail/Detail";

// Fonts
import "./src/fonts/SportsWorld.ttf";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container p-4">
        <Routes>
          <Route exact path="/" Component={LandingPage} />
          <Route path="/home" Component={Home} />
          <Route path="/detail/:id" Component={Detail} />
        </Routes>
      </div>
    </>
  );
};

export default App;
