import { createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "skyecounter",
  initialState: initialState,
  //reducers : put all the methods inside, it can get the latest state
  reducers: {
    incremented(state) {
      // the code here is still immutable because of internal package
      state.counter++;
    },
    decremented(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // here payload must be payload, it's the default
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
// action creators
//counterSlice.actions.toggle( );
// if you have only one reducer
const store = configureStore({ reducer: counterSlice.reducer }); //put an object in configureStore
// if you have many reducers , you can make it as a map
//const store = configureStore({ reducer: {counter: counterSlice.reducer},{ } });
export const counterActions = counterSlice.actions;
export default store;
