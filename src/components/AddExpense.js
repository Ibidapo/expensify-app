import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpense = ({ dispatch, history }) => (
  <div>
    <h2>Add Expense</h2>
    <ExpenseForm 
      onSubmit={(expense) => {
        dispatch(addExpense(expense));
        history.push('/');
      }}
    />
  </div>
);

AddExpense.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object
}

export default connect()(AddExpense);