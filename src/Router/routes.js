import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from '../utils/helperFunctions';

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated()
          ?
          <Component {...props} />
          :
          <Redirect to='/logIn' />
      }}
    />
  );
}
export function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated()
          ?
          <Redirect to='/dashboard' />
          :
          <Component {...props} />
      }} />
  )
}