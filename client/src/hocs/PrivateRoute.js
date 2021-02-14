/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuth } = useAuthContext();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isAuth) {
          return (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          );
        }
        return children;
      }}
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
