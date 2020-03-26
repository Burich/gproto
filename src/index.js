import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";

import App from './components/app';
import { GpApiServiceProvider } from "./components/gpapi-service-context";
import GpApiService from "./services/gpapi-service";

import store from "./store";

const gpApiService = new GpApiService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GpApiServiceProvider value={gpApiService}>
        <Router>
          <App />
        </Router>
      </GpApiServiceProvider>
    </Provider>
  </React.StrictMode>,document.getElementById('root')
);