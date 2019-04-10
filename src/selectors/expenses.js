import moment from 'moment';

const getExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const { description, createdAt } = expense;
    const createdMoment = moment(createdAt)
    const startMatch = startDate ? startDate.isSameOrBefore(createdMoment, 'day') : true;
    const endMatch = endDate ? endDate.isSameOrAfter(createdMoment, 'day') : true;
    const textMatch = description.toLowerCase().includes(text.toLowerCase());

    return textMatch && endMatch && startMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return b.createdAt - a.createdAt;
    }

    if (sortBy === 'amount') {
      return b.amount - a.amount;
    }
  });
};

export default getExpenses;