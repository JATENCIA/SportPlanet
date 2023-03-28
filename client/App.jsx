import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./src/Components/Navbar";
import { Home } from "./src/Components/Home";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container p-4">
        <Routes>
          <Route path="/home" Component={Home} />
        </Routes>
      </div>
    </>
  );
};

export default App;
