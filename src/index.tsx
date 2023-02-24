import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import "./vendor/normalize.scss";
import "./vendor/fonts.scss";
import App from './components/App/App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./redux/store"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
