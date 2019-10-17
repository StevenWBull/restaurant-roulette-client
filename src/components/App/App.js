import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ValidationContext from '../../contexts/ValidationContext';
import MainPage from '../MainPage/MainPage';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import UserHomeScreen from '../UserHomeScreen/UserHomeScreen';
import AddRestaurant from '../AddRestaurant/AddRestaurant';
import './App.css';
import Header from '../Header/Header';
import { TokenService } from '../../services/token-service';

export default function App() {
  const isError = (error) => {
    const newError = error;
    return newError;
  }

  const isUserOnline = {
    loggedIn: TokenService.hasAuthToken ? true : false
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ValidationContext.Provider value={{isError, isUserOnline}}>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/login' component={LoginForm} />
            <Route path='/register' component={RegistrationForm} />
            <Route path='/home' component={UserHomeScreen} />
            <Route path='/addrestaurant' component={AddRestaurant} />
          </Switch>
        </ValidationContext.Provider>
      </main>
    </>
  );
}