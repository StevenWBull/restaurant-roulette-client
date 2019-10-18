import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ValidationContext from '../contexts/ValidationContext';

export default function PrivateRoute({ component, ...props }) {
  const [ onlineUser ] = useContext(ValidationContext);
  const Component = component;
  return (
    <Route 
    { ...props }
    render={componentProps => (
      !onlineUser 
      ? <Component {...componentProps} /> 
      : <Redirect to='/home' /> 
    )}
    />
  );
};