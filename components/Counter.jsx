import React from 'react';
import useCounter from './useCounter';

const Counter = ({ initialCount = 0 }) => {
  const [count, setCountMethods] = useCounter(initialCount);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={setCountMethods.increment}>increment</button>
      <button onClick={setCountMethods.decrement}>decrement</button>
      <button onClick={setCountMethods.reset}>reset</button>
    </div>
  );
};

export default Counter;
