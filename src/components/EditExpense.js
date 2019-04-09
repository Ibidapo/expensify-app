import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpense = (props) => (
  <div>
    <h2>Edit Expense</h2>
    <ExpenseForm 
      expense={props.expense}  
      onSubmit={(expense) => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push('/');
      }} 
    />
    <button onClick={() => {
      props.dispatch(removeExpense(props.expense.id));
      props.history.push('/');
    }} >Remove</button>
  </div>
);

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id) 
});

EditExpense.propTypes = {
  expense: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.object,
}

export default connect(mapStateToProps)(EditExpense);