import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import ValidationContext from '../../contexts/ValidationContext';
import RegistrationForm from './RegistrationForm';

it('renders without crashing', () => {
  const [ onlineUser, setOnlineUser ] = [ false, null ];

  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <ValidationContext.Provider value={[onlineUser, setOnlineUser]}>
        <RegistrationForm />
      </ValidationContext.Provider>
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
});