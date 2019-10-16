import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApiContext from './contexts/ApiContext';
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <ApiContext.Provider>
      <App />
    </ApiContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

