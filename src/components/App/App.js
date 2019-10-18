import React, { useState, useEffect } from 'react';
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
import PrivateOnlyRoute from '../../routes/PrivateOnlyRoute';
import PublicOnlyRoute from '../../routes/PublicOnlyRoute';

export default function App() {
  const [ onlineUser, setOnlineUser ] = useState(!!TokenService.hasAuthToken());

  useEffect( () => {
    setOnlineUser(!!TokenService.hasAuthToken())
  }, [onlineUser])

  return (
    <>
     <ValidationContext.Provider value={[onlineUser, setOnlineUser]}>
        <header>
          <Header />
        </header>
        <main>
            <Switch>
              <Route exact path='/' component={MainPage} />
              <PublicOnlyRoute path='/login' component={LoginForm} />
              <PublicOnlyRoute path='/register' component={RegistrationForm} />
              <PrivateOnlyRoute path='/home' component={UserHomeScreen} />
              <PrivateOnlyRoute path='/addrestaurant' component={AddRestaurant} />
            </Switch>
        </main>
      </ValidationContext.Provider>
    </>
  );
}