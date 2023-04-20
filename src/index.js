import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './Data/Store/Store';
import registerServiceWorker from './registerServiceWorker';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Provider store={store} >
    <App  />
    </Provider>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

