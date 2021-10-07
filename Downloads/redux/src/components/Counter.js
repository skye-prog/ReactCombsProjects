import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  // useSelector decides which data we want to extract from
  // our  store
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  //you need to add a status to reducer
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  const incrementHandler = () => {
    dispatch({ type: "incremented" });
  };
  const decrementsHandler = () => {
    dispatch({ type: "decremented" });
  };
  // amount has to be the same which you have defined in the
  //reducer function in the store, also amount can be an input
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementsHandler}>Decrement</button>

        <button onClick={increaseHandler}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
