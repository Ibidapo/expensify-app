import React, { Component } from 'react';

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: ''
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
    if (/^\d*(\.\d{0,2})?$/.test(amount)) {
      this.setState(() => ({ amount}))
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Description'
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type='text'
          placeholder='Amount'
          value= {this.state.amount}
          onChange={this.onAmountChange}
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
    )
  }
}

export default ExpenseForm;