import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css'
import { CartApp } from "./CartApp.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartApp />
    </BrowserRouter>
  </React.StrictMode>
);
