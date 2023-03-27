import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./src/Components/Navbar";
import Produts from "./src/Components/Produts/Produts";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container p-4">
        <Routes>
          <Route path="/" Component={Produts}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
