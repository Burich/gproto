import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app';
import { GpApiServiceProvider } from "./components/gpapi-service-context";
import GpApiService from "./services/gpapi-service";

const gpApiService = new GpApiService();

ReactDOM.render(
  <React.StrictMode>
    <GpApiServiceProvider value={gpApiService}>
      <Router>
        <App />
      </Router>
    </GpApiServiceProvider>
  </React.StrictMode>,document.getElementById('root')
);