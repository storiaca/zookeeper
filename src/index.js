import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './Components/App';
import reducers from './reducers';

const createdStore = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createdStore(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#root'));