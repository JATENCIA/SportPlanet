import "./index.css";
import App from "../App";
import React from "react";
import axios from "axios";
import { store } from "./redux/Store/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//axios.defaults.baseURL = "http://localhost:5173";
axios.defaults.baseURL = "https://sportsplanet-production.up.railway.app/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-uifyeswryeh53bj1.us.auth0.com"
        clientId="3A17pliIGOkuzXgriNiVChRPGJnHQ4Eh"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
);
