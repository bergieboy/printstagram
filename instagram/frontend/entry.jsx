import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './util/session_api_util';
import {fetchUsers} from './actions/user_actions';
import {fetchPhotos} from './actions/photo_actions';

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
  window.fetchUsers = fetchUsers;
  window.fetchPhotos = fetchPhotos;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // Testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
