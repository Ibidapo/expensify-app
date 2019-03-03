// SET_FILTER_TEXT
export const setFilterText = (text = '') => ({
  type: 'SET_FILTER_TEXT',
  text
});

// SORT_BY_DATE 
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SORT_BY_DATE 
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE
export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

// SET_END_DATE
export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});