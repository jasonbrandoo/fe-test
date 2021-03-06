/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route as Router, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useToken from '../utils/useToken';

function Route({ component: Component, auth, ...rest }) {
  const { token } = useToken();

  if (auth) {
    return (
      <Router
        {...rest}
        render={props => {
          return token.length > 0 ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  }

  return <Router {...rest} render={props => <Component {...props} />} />;
}

Route.defaultProps = {
  auth: undefined,
};

Route.propTypes = {
  component: PropTypes.func.isRequired,
  auth: PropTypes.bool,
};

export default Route;
