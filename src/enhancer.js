/*
  This is seperate entity inorder to learn enchancers
*/

// Redux
import { createStore } from "redux";


const reducer = (state = {}, action) => {
  //  BASIC REDUCER
  return state;
}


const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {

  /**
   * reducer => actual reducer is passed
   * initialState => intial value passed to initial reducer
   * enhancer => middleware that is passed
   */


  const monitoredReducer = (state, action) => {
    const startTime = performance.now();
    const newState = reducer(state, action);
    const endTime = performance.now();
    const diff = endTime - startTime;
    console.log("custom middleware invokes =>", diff);
    return newState;
  }


  // monitoredReducer => apply functionality
  // initialState => passed to new monitoredReducer 
  // enchancer that is passed from root which is `monitorEnhancer`
  return createStore(monitoredReducer, initialState, enhancer)
}

/**
 * createStore ->
 *  - `reducer` is only required paramater
 *  -  2nd paramter is optional so instead of `initialState` we have passed `enhancer`
 *     that will act as middleware.
 */

export const store = createStore(reducer, monitorEnhancer);
console.log("Store", store);


// Subscription:
const subscriber = () => console.log('Subscriber', store.getState());
store.subscribe(subscriber);


// Although it is not used anywhere in Reducer but just for dispatch any action.
const testingActionCreator = () => ({ type: 'TESTING' });

setInterval(() => {
  console.log("Interval => ", store.dispatch(testingActionCreator()))
}, 2000);



/*
 HOW TO USE:

 - Copy All the code in `enhancer.js`
 - Paste in index.js remove all code from `index.js`
 - Open browser
 - See Console of devtools 
 - Interval method is called which is dispatching an Action
 - On Each dispatch `Enchancer` is called which calls Custom Middleware
*/