import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux

import { createStore } from "redux";

// Initial State:

const initialState = { counter: 0 };

// Reducer

const reducer = (state = initialState, action) => {
  console.log("state", state);
  console.log("action", action);

  return state;
};

const store = createStore(reducer);
console.log("Store", store);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
