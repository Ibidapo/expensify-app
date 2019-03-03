import { createStore, combineReducers } from 'redux';
import uuidv4 from 'uuid/v4';

// const demoState = {
//   expenses: [{
//     id: 'ascasdf',
//     description: 'Monthly allowance',
//     note: 'Expenses for transportatio, internet, call and feeding',
//     amount: 35000,
//     createdAt: 0
//   }],
//   filters:{
//     text: 'month',
//     sortBy: 'amount',
//     startDate: undefined,
//     endDate: undefined
//   }
// }

// Action Generators
// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
});
// REMOVE_EXPENSE
const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// SET_FILTER_TEXT
const setFilterText = (text = '') => ({
  type: 'SET_FILTER_TEXT',
  text
})
// SORT_BY_DATE 
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});
// SORT_BY_DATE 
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});
// SET_START_DATE
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
})
// SET_END_DATE
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
})

// Default States for Reducers
const expensesDefaultState = [];
const filterDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

// Reducers
// Expenses Reducer
const expensesReducer = (state = expensesDefaultState, action) => {
  const { type, expense, id: actionId, updates } = action;

  switch(type) {
    case 'ADD_EXPENSE':
     return [...state, expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== actionId);
    case 'EDIT_EXPENSE':
      return state.map((expense) => (expense.id === actionId) ? { ...expense, ...updates } : expense);
    default: 
      return state;
  }
}
// Filter Reducer
const filtersReducer = (state = filterDefaultState, action) => {
  const { type, text, date } = action;

  switch (type) {
    case 'SET_FILTER_TEXT':
      return { ...state, text };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date'};
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SET_START_DATE':
      return { ...state, startDate: date };
    case 'SET_END_DATE':
      return { ...state, endDate: date };
    default:
      return state
  }
}

// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses.filter((expense) => {
//     const { description, createdAt } = expense;
//     const startMatch = startDate <= createdAt;  
//     const endMatch = endDate >= createdAt;
//     const textMatch = description.toLowerCase().includes(text.toLowerCase());
//     return textMatch && endMatch && startMatch;
//   }).sort((a, b) => {
//     if (sortBy === 'date') {
//       return a.createdAt - b.createdAt;
//     }

//     if(sortBy === 'amount') {
//       return b.amount - a.amount;
//     }
//   });
// };

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

store.subscribe(() => console.log(store.getState()));
// store.subscribe(() => {
//   const { expenses, filters: { text, sortBy, startDate, endDate } } = store.getState();
//   console.log(getVisibleExpenses(expenses, { text, sortBy, startDate, endDate }));
// });

// store.dispatch(addExpense({ description: 'Monthly Allowance', amount: 35000, createdAt: 1200 }));
// store.dispatch(addExpense({ description: 'Mum Allowance', amount: 25000, createdAt: 1000 }));

const expenseOne = store.dispatch(addExpense({ description: 'Monthly Allocation', amount: 35000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Mum Allowance', amount: 25000, createdAt: 1000 }));
const { expense: { id: idOne } } = expenseOne;
const { expense: { id: idTwo } } = expenseTwo;
store.dispatch(removeExpense(idOne));
store.dispatch(editExpense(idTwo, { amount: 30000 }));
store.dispatch(setFilterText('m'));
store.dispatch(setFilterText());
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
store.dispatch(sortByDate());
store.dispatch(sortByAmount());