import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export const Dashboard = () => (
  <div>
    <h2>My Dashboard</h2>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);