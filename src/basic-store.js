import { store } from "./index";
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


/*
    Note: This code is working due to `setTimeout` which is correct sicne 
    you have imported this file in index.js top so if you try to to do 

    `store.dispatch(incrementActionCreator());` without timeout it will 
    throw an error -> "Cannot access 'store' before initialization" so 
    you here a patch or hacky way is applied to async wait using setTimeout
    to mimic async behaviour and let JS to execute below code to let state
    variable initialized.
*/
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
   

export {reducer}

