import React, { Component, useState } from "react";
import Display from "./Display";

function ButtonPad() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const increaseAmount = (amount) => {
    setCount(count + amount);
  };
  const decreaseAmount = (amount) => {
    setCount(count - amount);
  };
  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div>
      <div className="button-container">
        <button
          className="button button--primary"
          onClick={() => increaseAmount(1)}
        >
          Increase by 1
        </button>
        <button
          className="button button--primary"
          onClick={() => decreaseAmount(1)}
        >
          Decrease by 1
        </button>
      </div>
      <div className="button-container">
        <button
          className="button button--primary"
          onClick={() => increaseAmount(5)}
        >
          Increase by 5
        </button>
        <button
          className="button button--primary"
          onClick={() => decreaseAmount(5)}
        >
          Decrease by 5
        </button>
      </div>
      <div className="reset-container">
        <button className="button reset-button" onClick={() => reset()}>
          Reset Total
        </button>
      </div>
      <Display count={count} />
    </div>
  );
}

export default ButtonPad;
