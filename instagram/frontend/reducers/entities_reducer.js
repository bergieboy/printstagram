import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import photosReducer from './photos_reducer';
import commentsReducer from './comments_reducer';
import usersReducer from './users_reducer';
import followsReducer from './follows_reducer';

export default combineReducers({
  photos: photosReducer,
  comments: commentsReducer,
  users: usersReducer,
  follows: followsReducer,
});
