import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import logger from 'redux-logger';

import auth from './reducers/auth';
import global from './reducers/global';

let store = null;

if (process.env.NODE_ENV === 'production') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
} else {
  store = createStore(combineReducers({ auth, global }), applyMiddleware(thunk));
}


export default store;