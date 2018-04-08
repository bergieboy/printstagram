import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import photosReducer from './photos_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
  photos: photosReducer,
  users: usersReducer,
});
