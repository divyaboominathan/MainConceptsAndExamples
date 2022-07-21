import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handledecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="counter">
      <div className="row1">
        {" "}
        <button onClick={handleIncrement}>Increment</button>
      </div>
      {counter}
      <div className="row2">
        {" "}
        <button onClick={handledecrement}>Decrement</button>
      </div>
    </div>
  );
};
export default Counter;
