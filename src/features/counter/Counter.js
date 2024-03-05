import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './CounterSlice';
import './Counter.css'; // Import the CSS file for styling

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <div className="counter-wrapper">
        <button
          className="counter-button increment"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="counter-value">{count}</span>
        <button
          className="counter-button decrement"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}
