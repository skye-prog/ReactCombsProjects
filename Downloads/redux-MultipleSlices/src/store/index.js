import { createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit";
// we want to seperate the reducers if they don't have connections
const initialCounterState = { value: 0, showCounter: true };
const counterSlice = createSlice({
  name: "skyecounter",
  initialState: initialCounterState,
  //reducers : put all the methods inside, it can get the latest state
  reducers: {
    incremented(state) {
      // the code here is still immutable because of internal package
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
    increase(state, action) {
      state.value = state.value + action.payload; // here payload must be payload, it's the default
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const initialAuthState = { isAuthenticated: false }; // an object, should use :
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
// we only can have one store , but we can use map to have many reducers
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
}); //put an object in configureStore

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
