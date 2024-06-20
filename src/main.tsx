import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { WrappedApp } from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </React.StrictMode>
);
