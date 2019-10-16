import { useReducer } from 'react';

const init = initialCount => {
  return { count: initialCount };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error('action type err');
  }
};

const useCounter = initialCount => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

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

  return [state.count, setStateMethods];
};

export default useCounter;
