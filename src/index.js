import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './styles/global.scss'

// App
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
