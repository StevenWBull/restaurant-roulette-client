import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import UserHomeScreen from './UserHomeScreen';

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <BrowserRouter>
      <UserHomeScreen />
    </BrowserRouter>,
    div
  )
  
  ReactDOM.unmountComponentAtNode(div)
});