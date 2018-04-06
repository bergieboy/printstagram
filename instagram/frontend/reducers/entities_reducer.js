import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import usersReducer from './users_reducer';

export default combineReducers({
  users: usersReducer,
});
