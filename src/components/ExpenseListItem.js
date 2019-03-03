import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <li>
    <div>
      <p>Description: {description}.</p>
      <p>Amount: {amount} - createdAt: {createdAt}</p>
      <button onClick={() => dispatch(removeExpense(id))} >Remove</button>
    </div>
  </li>
);

ExpenseListItem.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
  createdAt: PropTypes.number,
  dispatch: PropTypes.func
}

export default connect()(ExpenseListItem);