import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ExpenseListItem from './ExpenseListItem';
import getExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h3>Expense List</h3>
    <ol>
      {props.expenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))}
    </ol>
  </div>
)

ExpenseList.propTypes = {
  expenses: PropTypes.array
}

const mapStateToProps = (state) => ({ expenses: getExpenses(state.expenses, state.filters) });

export default connect(mapStateToProps)(ExpenseList) ;