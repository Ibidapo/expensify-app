import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <header>
    <h2>Expensify</h2>
    <nav>
      <NavLink to='/' activeClassName='active' exact={true}>Home</NavLink>
      <NavLink to='/create' activeClassName='active'>Add Expense</NavLink>
      <NavLink to='/help' activeClassName='active'>Help</NavLink>
    </nav>
  </header>
);