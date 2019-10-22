import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import EditRestaurant from './EditRestaurant';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <EditRestaurant />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
});