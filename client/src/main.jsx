import "./index.css";
import App from "../App";
import React from "react";
import axios from "axios";
import { store } from "./redux/Store/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5000";
//axios.defaults.baseURL = "deploy"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-j0kao75n5a8hszfj.us.auth0.com"
        clientId="okBJLqsiuORgexDsYLGBogOaVw0mT4Gc"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
);
