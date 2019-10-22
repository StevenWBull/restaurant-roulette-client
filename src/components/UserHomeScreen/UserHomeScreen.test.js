import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
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