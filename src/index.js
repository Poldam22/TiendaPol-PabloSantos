import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Provedor from './context/ProvedorCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provedor>
    <App />
  </Provedor>

);


