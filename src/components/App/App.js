import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import UserHomeScreen from '../UserHomeScreen/UserHomeScreen';
import AddRestaurant from '../AddRestaurant/AddRestaurant';
import './App.css';
import Header from '../Header/Header';

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegistrationForm} />
          <Route path='/home' component={UserHomeScreen} />
          <Route path='/addrestaurant' component={AddRestaurant} />
        </Switch>
      </main>
    </>
  );
}