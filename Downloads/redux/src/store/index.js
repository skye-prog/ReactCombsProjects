import { createStore } from "redux";
import React, { useReducer } from "react";

function counterReducer(state = { counter: 0, showCounter: true }, action) {
  switch (action.type) {
    case "incremented":
      return { counter: state.counter + 1, showCounter: state.showCounter };
    case "decremented":
      return { counter: state.counter - 1, showCounter: state.showCounter };
    case "increase":
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "toggle":
      return { counter: state.counter, showCounter: !state.showCounter };
    default:
      return state;
  }
}

let store = createStore(counterReducer);
// export store,so that redux can be used outside of this
// index.js file, we only have one redux store
//next step is providing store
export default store;
