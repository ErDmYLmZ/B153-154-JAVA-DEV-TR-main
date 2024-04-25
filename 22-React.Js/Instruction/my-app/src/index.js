import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/scss/bootstrap.scss"; //scss icin gerekli olan bootstrap importu
import "bootstrap"; //bootstrap icin geekli olan js importu
import "bootstrap/dist/css/bootstrap.min.css"; //css icin gerekli olan bootstrap importu
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
