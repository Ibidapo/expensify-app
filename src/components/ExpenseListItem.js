import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <li>
    <div>
      <h4><Link to={`/edit/${id}`}>{description}</Link></h4>
      <p>=N= {amount} - Time: {createdAt}</p>
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

export default ExpenseListItem;