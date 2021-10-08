import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  // useSelector decides which data we want to extract from
  // our  store
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  //you need to add a status to reducer
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const incrementHandler = () => {
    dispatch(counterActions.incremented());
  };
  const decrementsHandler = () => {
    dispatch(counterActions.decremented());
  };
  // amount has to be the same which you have defined in the
  //reducer function in the store, also amount can be an input
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
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
