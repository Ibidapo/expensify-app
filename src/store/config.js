import { createStore, combineReducers } from 'redux';
import { expensesReducer } from '../reducers/expenses';
import { filtersReducer } from '../reducers/filters';

export const storeConfig = () =>  createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));