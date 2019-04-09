import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? props.expense.amount : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: undefined
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || /^\d{1,}(\.\d{0,2})?$/.test(amount)) {
      this.setState(() => ({ amount}))
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  } 

  onFocusChange = ({ focused }) => this.setState({ calendarFocused: focused });
  
  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.description && this.state.amount) {
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      })
    } else {
      this.setState(() => ({ error: 'Provide description and Amount' }))
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Description'
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type='text'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            id='aribnb-date-picker'
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            type='number'
            placeholder='Add note for your expense (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

ExpenseForm.propTypes = {
  onSubmit: PropTypes.func,
  expense: PropTypes.object
}

export default ExpenseForm;