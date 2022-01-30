import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import M from "materialize-css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
  // document.addEventListener("DOMContentLoaded", function () {
  //   var elems = document.querySelectorAll("select");
  //   var instances = M.FormSelect.init(elems);
  // })
);
