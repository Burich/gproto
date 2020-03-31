import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";

import App from './components/app';
// import LoadingScreen from './components/loading-screen';
import { GpApiServiceProvider } from "./components/gpapi-service-context";
import GpApiService from "./services/gpapi-service";
import FakeGpApiService from "./services/fake-gpapi-service";

import store from "./store";

import { config } from "./constants";

const gpApiService = config.isDev ? new GpApiService() : new FakeGpApiService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <LoadingScreen /> */}
      <GpApiServiceProvider value={gpApiService}>
        <Router>
          <App />
        </Router>
      </GpApiServiceProvider>
    </Provider>
  </React.StrictMode>,document.getElementById('root')
);