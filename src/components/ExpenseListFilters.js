import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { DateRangePicker } from 'react-dates';

import { 
  setFilterText, sortByDate, sortByAmount, setEndDate, setStartDate 
} from '../actions/filters';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends Component {
  state = {
    calendarFocus: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    const { props: { dispatch } } = this;

    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  }
  onFocusChange = (calendarFocus) => this.setState({ calendarFocus })

  render() {
    const { 
      props: { dispatch, filters: { startDate, endDate, text } },
      state: { calendarFocus }, onDatesChange, onFocusChange } = this;

    return (
      <div>
        <input
          type='text'
          value={text}
          onChange={(e) => {
            dispatch(setFilterText(e.target.value));
          }}
        />
        <select
          onBlur={(e) => {
            if (e.target.value === 'date') {
              dispatch(sortByDate());
            } else {
              dispatch(sortByAmount());
            }
          }}
        >
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker 
          startDate={startDate}
          startDateId='startDateId'
          endDate={endDate}
          endDateId='endDateId'
          onDatesChange={onDatesChange}
          focusedInput={calendarFocus}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
}

ExpenseListFilters.propTypes = {
  filters: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => ({ filters: state.filters });

export default connect(mapStateToProps)(ExpenseListFilters);