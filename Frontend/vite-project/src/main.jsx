import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <GoogleOAuthProvider clientId="<client-Id>" className="hover:bg-red-600"> */}
      {/* <App /> */}
    {/* </GoogleOAuthProvider> */}
    <App/>
  </BrowserRouter>
);
