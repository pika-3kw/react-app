import { useSelector, useDispatch } from "react-redux";

import { decrement, increment, reset, hack } from "../actions/countActions";

const CountScreen = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count.count);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  const onReset = () => {
    dispatch(reset());
  };

  const onHack = (point) => {
    dispatch(hack(+point));
  };

  return (
    <div style={{ margin: 100 }}>
      <button onClick={onIncrement}>Increment</button>
      <p style={{ marginLeft: 10, marginRight: 10 }}>{count}</p>
      <button onClick={onDecrement}>Decrement</button>
      <hr />
      <button onClick={onReset}>Reset</button>
      <button onClick={() => onHack(999)}>Hack</button>
    </div>
  );
};

export default CountScreen;
