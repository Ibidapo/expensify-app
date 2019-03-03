const getExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const { description, createdAt } = expense;
    const startMatch = startDate <= createdAt;
    const endMatch = endDate >= createdAt;
    const textMatch = description.toLowerCase().includes(text.toLowerCase());
    // console.log(textMatch && endMatch && startMatch);
    return textMatch;
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