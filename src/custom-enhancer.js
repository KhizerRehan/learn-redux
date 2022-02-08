/*
  This is seperate entity inorder to learn enchancers
*/

// Redux
import { createStore } from "redux";



const INCREMENT = "counter/increment";
const DECREMENT = "counter/decrement";

const incrementActionCreator = () => ({ type: INCREMENT });
const decrementActionCreator = () => ({ type: DECREMENT });

const reducer = (state = { count: 1 }, action) => {
  //  BASIC REDUCER
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}


const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {

  /**
   * reducer => actual reducer is passed
   * initialState => intial value passed to initial reducer
   * enhancer => middleware that is passed
   */


  const logReducer = (state, action) => {
    console.log("Old State", state, action);
    const newState = reducer(state, action);
    console.log("New State", newState, action);
    return newState;
  }


  // logReducer => apply functionality
  // initialState => passed to new monitoredReducer 
  // enchancer that is passed from root which is `logEnhancer`
  return createStore(logReducer, initialState, enhancer)
}

/**
 * createStore ->
 *  - `reducer` is only required paramater
 *  -  2nd paramter is optional so instead of `initialState` we have passed `enhancer`
 *     that will act as middleware.
 */

export const store = createStore(reducer, logEnhancer);
console.log("Store", store);


// Subscription:
const subscriber = () => console.log('Subscriber', store.getState());
store.subscribe(subscriber);


let oddEvenValue = 0;

setInterval(() => {

  if (oddEvenValue % 5 == 0) {
    console.log("Decrement => ", store.dispatch(decrementActionCreator()))
  }
  else {
    console.log("Increment => ", store.dispatch(incrementActionCreator()))
  }
  oddEvenValue += 1;
}, 2000);



/*
  HOW TO USE:

  - Copy All the code in `enhancer.js`
  - Paste in index.js remove all code from `index.js`
  - Open browser
  - See Console of devtools
  - Interval method is called which is dispatching an Action
  - On Each dispatch `Enchancer` is called which calls Custom Middleware


  Note:

  This example is not "EXACTLY" same as what is shown in video. I have customized
  reducer to make it more practical. In video there is NO `Increment/Decrement` reducer
  i have just used example of `increment/decrement` reducer to understant how before/after 
  logging is working when any action is dispatched.

*/