import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./app";
import { Provider } from "react-redux";
import store from "./state/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
