import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}


  // Testing
  // window.login = login;
  // window.logout = logout;
  // window.singup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});