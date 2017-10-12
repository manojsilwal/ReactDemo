import React from 'react'
import { render } from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import logger from 'redux-logger'

const store = createStore(reducer,
    ['Use Redux'],
    applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);