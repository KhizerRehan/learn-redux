import { store } from "./index";

// Redux

import { combineReducers } from "redux";

// Initial State:

const initialState = {
  users: [
    { id: 1, name: "Steve" },
    { id: 2, name: "Khizer" },
  ],
  tasks: [
    { title: "File the tps report" },
    { title: "Order more energy drinks " },
  ],
};

// Action Types:

const ADD_TASK = "tasksReducer/ADD_TASK";
const ADD_USER = "userReducer/ADD_USER";

// Action Creators:

const addTaskActionCreator = (data) => ({ type: ADD_TASK, payload: data });
const addUserActionCreator = (data) => ({ type: ADD_USER, payload: data });

// Reducer

const userReducer = (users = initialState.users, action) => {
  console.log("userReducer", action);
  switch (action.type) {
    case ADD_USER:
      return [...users, action.payload];

    default:
      return users;
  }
};

const taskReducer = (tasks = initialState.tasks, action) => {
  console.log("taskReducer", action);
  switch (action.type) {
    case ADD_TASK:
      return [...tasks, action.payload];

    default:
      return tasks;
  }
};

// Combiner Reducers
const reducer = combineReducers({
  users: userReducer,
  tasks: taskReducer,
});


/*
    Note: This code is working due to `setTimeout` which is correct since 
    you have imported this file in index.js top so if you try to to do 

    `store.dispatch(incrementActionCreator());` without timeout it will 
    throw an error -> "Cannot access 'store' before initialization" so 
    you here a patch or hacky way is applied to async wait using setTimeout
    to mimic async behaviour and let JS to execute below code to let `state`
    variable initialized.
*/
// Call Increment after 1s

setTimeout(() => {
  console.log("Combine Reducer State", store.getState());

const newTask = { title: "Ne Task added to the list" };
const newUser = { id: 3, name: "Khizer Rehan" };

store.dispatch(addTaskActionCreator(newTask));
store.dispatch(addUserActionCreator(newUser));
}, 1000);



export { reducer };
