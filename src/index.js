
import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global'
import Roteamento from './Routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Roteamento />
  </React.StrictMode>
)