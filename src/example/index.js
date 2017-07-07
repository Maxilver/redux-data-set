import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import Example from './components/Example';
import createDataSetReducer from '../';

const reducers = combineReducers({
  simple: createDataSetReducer({ name: 'simple'}),
  extended: createDataSetReducer({ name: 'extended'}),
});

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : null
);

ReactDOM.render(
  <Provider store={store}>
    <Example />
  </Provider>,
  document.querySelector('#root')
);
