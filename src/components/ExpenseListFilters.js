import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 

import { setFilterText, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input 
      type='text' 
      value={props.filters.text} 
      onChange={(e) => {
        props.dispatch(setFilterText(e.target.value));
      }} 
    />
    <select 
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate());
        } else {
          props.dispatch(sortByAmount()); 
        }
      }}
    >
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
  </div>
);

ExpenseListFilters.propTypes = {
  filters: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => ({ filters: state.filters });

export default connect(mapStateToProps)(ExpenseListFilters);