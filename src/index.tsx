import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import "./vendor/normalize.scss";
import "./vendor/fonts.scss";
import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);