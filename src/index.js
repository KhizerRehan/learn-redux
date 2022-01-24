import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux
import { createStore } from "redux";

import { reducer } from "./basic-store";

// ********************************************
//  Demo Basic Redux Store:
/*
 Note: I have moved all previous implementation into seperate file so that while learning other pieces
 of redux you can just play around just by commenting 1 by and 1 and testing the in this way it will help
 you to learn code and how it is working + see code COMMIT BY COMMIT which is pushed on github.
 */

const basicReduxStoreReducer = reducer;

// ********************************************

// Explicitly "export" store to import in other pieces of application to learn code seperatly:
// -> https://stackoverflow.com/a/41172768/6618218
export const store = createStore(basicReduxStoreReducer);
console.log("Store", store);


// Subscription:
const subscriber = () => console.log('Subscriber', store.getState());
store.subscribe(subscriber);


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

