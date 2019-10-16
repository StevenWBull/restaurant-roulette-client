import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import './App.css';


export default function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegistrationForm} />
      </Switch>
    </main>
  );
}