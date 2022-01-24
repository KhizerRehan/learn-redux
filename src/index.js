import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux

import { createStore } from "redux";

// Initial State:

const initialState = { counter: 0 };

// Action Types:

const INCREMENT = "counter/increment";
const DECREMENT = "counter/decrement";

// Action Creators:

const incrementActionCreator = () => ({type: INCREMENT});
const decrementActionCreator = () => ({type: DECREMENT});

// Reducer

const reducer = (state = initialState, action) => {
  console.log("action", action);

  if (action.type === INCREMENT) {
    let { counter } = state;
    counter = counter + 1;
    return {
      counter
    };
  }

  if (action.type === DECREMENT) {
    let { counter } = state;
    counter = counter - 1;
    return {
      counter
    };
  }

  return state;
};

const store = createStore(reducer);
console.log("Store", store);

// Call Increment after 1s
setTimeout(()=> {
  console.log("***********  increment creator invoked ********")
 store.dispatch(incrementActionCreator());
 store.dispatch(incrementActionCreator());
 store.dispatch(incrementActionCreator());
 store.dispatch(incrementActionCreator());
 store.dispatch(incrementActionCreator());
 console.log("Increment-5x");
 console.log("State", store.getState());
}, 2000)

// Call Increment after 1s
setTimeout(()=> {
  console.log("***********  decrement creator invoked ********")
  store.dispatch(decrementActionCreator());
  store.dispatch(decrementActionCreator());
  console.log("Decrement-2x");
  console.log("State", store.getState());
 }, 5000)

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
