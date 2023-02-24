import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import "./vendor/normalize.scss";
import "./vendor/fonts.scss";
import App from './components/App/App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);