import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApiContext from './contexts/ApiContext';
import { AuthApiService } from './services/auth-endpoints';
import 'normalize.css';
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <ApiContext.Provider value={ AuthApiService }>
      <App />
    </ApiContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

