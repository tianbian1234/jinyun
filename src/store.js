import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import fetchMiddleWare from 'tool/middleware.js';
import fetchMiddleWareAsync from 'tool/middleware2.js';
import rootReducer from 'reducer';

// DevTools专用配置
let reduxDevTools = function () {
  if( typeof window === 'object'
    && typeof window.devToolsExtension !== 'undefined') {
    return window.devToolsExtension()
  } else {
    return f => f
  }
};

const configureStore = compose(
  applyMiddleware(thunkMiddleware, fetchMiddleWare, fetchMiddleWareAsync),
  reduxDevTools()
)(createStore);

export default function(initialState) {
  return configureStore(rootReducer, initialState);
};
