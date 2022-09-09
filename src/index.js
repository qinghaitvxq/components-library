import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />, document.getElementById("app"));

// ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
