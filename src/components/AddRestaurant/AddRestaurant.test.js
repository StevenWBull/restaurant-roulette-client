import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddRestaurant from './AddRestaurant';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <AddRestaurant />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
});