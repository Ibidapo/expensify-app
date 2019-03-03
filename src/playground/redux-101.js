import { createStore } from 'redux';

// Action generators
const incrementCount = ({ value = 1 } = {}) => ({ type: 'INCREMENT', value });
const decrementCount = ({ value = 1 } = {}) => ({ type: 'DECREMENT', value });
const resetCount = () => ({ type: 'RESET' });
const setCount = ({ value = 101 } = {}) => ({ type: 'SET', value });

// Reducers
const countReducers = (state = { count: 0 }, action) => {
  const { count } = state;
  const { type, value } = action;

  switch (type) {
    case 'INCREMENT':
      return { count: count + value };
    case 'DECREMENT':
      return { count: count - value };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: 101 };
    default:
      return state;
  }
}

const store = createStore(countReducers);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({ value: 7 }));
store.dispatch(incrementCount({ value: 3 }));
store.dispatch(decrementCount());
store.dispatch(decrementCount({ value: 19 }));
store.dispatch(setCount());
store.dispatch(resetCount());