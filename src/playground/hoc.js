import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This is the info component: {props.details}</p>
  </div>
);

Info.propTypes = {
  details: PropTypes.string
};

const withAdminWarning = (WrappedComponent) => (props) => (
  <div>
    {props.isAdmin && <p>This is privileged information. Do not share!</p>}
    <WrappedComponent {...props} />
  </div>
);

const requireAuthentication = (WrappedComponent) => (props) => (
  <div>
    {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view info</p>}
  </div>
);

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} details='for displaying information' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} details='for displaying information' />, document.getElementById('app'));