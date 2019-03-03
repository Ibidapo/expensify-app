import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import './styles/style.scss';
import { AppRouter } from './routers/AppRouter';
import { storeConfig } from './store/config';
import { addExpense } from './actions/expenses';
import { setFilterText } from './actions/filters';
// import { getExpenses } from './selectors/expenses';

const store = storeConfig();

store.dispatch(addExpense({ description: 'Oyindamola\'s Allowance', amount: 10000, createdAt: 21 }));
store.dispatch(addExpense({ description: 'Adesola\'s Allowance', amount: 5000, createdAt: 3112 }));
store.dispatch(addExpense({ description: 'Mum\'s Allowance', amount: 25000, createdAt:221 }));
store.dispatch(addExpense({ description: 'Monthly Power Bill', amount: 5000, createdAt: 12 }));

const state = store.getState();
const { expenses, filters } = state;
console.log(expenses, filters);
// const { text, sortBy, startDate, endDate } = filters;
// console.log(getExpenses(expenses, { text, sortBy, startDate, endDate }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
