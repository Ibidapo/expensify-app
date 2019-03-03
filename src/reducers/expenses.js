
// Default States for Expenses Reducer
const expensesDefaultState = [];

// Expenses Reducer
export const expensesReducer = (state = expensesDefaultState, action) => {
  const { type, expense, id: actionId, updates } = action;

  switch (type) {
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