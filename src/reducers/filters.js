import moment from 'moment';

// Default State for Filters Reducer
const filtersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

// Filter Reducer
export const filtersReducer = (state = filtersDefaultState, action) => {
  const { type, text, date } = action;

  switch (type) {
    case 'SET_FILTER_TEXT':
      return { ...state, text };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
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