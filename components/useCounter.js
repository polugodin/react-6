import { useReducer } from 'react';

const reducer = (count, action) => {
  switch (action.type) {
    case 'increment':
      return count + 1;
    case 'decrement':
      return count - 1;
    case 'reset':
      return action.payload;
    default:
      throw new Error('action type err');
  }
};

const useCounter = initialCount => {
  const [count, dispatch] = useReducer(reducer, initialCount);

  const setStateMethods = {
    increment: () => {
      dispatch({ type: 'increment' });
    },
    decrement: () => {
      dispatch({ type: 'decrement' });
    },
    reset: () => {
      dispatch({ type: 'reset', payload: initialCount });
    }
  };

  return [count, setStateMethods];
};

export default useCounter;
