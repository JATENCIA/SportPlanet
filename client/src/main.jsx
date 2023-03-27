import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Produts from "./Components/Produts/Produts";
import ProductsDetaild from "./Components/Produts/ProductsDetaild";
import Home from "./Views/Home"



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Routes>
          <Route exact path="/produts" Component={Produts}></Route>
          <Route path="/detaild" Component={ProductsDetaild}></Route>
          <Route exact path="/home" Component={Home}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
