import merge from 'lodash/merge';

import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';

import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

import {RECEIVE_USER} from '../actions/user_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.payload.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, {[action.photo.id]: action.photo});
    case REMOVE_PHOTO:
      delete newState[action.photoId];
      return newState;

    case RECEIVE_USER:
      return merge({}, state, action.payload.photos);

    case RECEIVE_COMMENT:
      return merge({}, state, {[action.photo.id]: action.photo});
    case REMOVE_COMMENT:
      newState[action.photo.id] = action.photo;
      return newState;

    default:
      return state;
  }
};

export default photosReducer;
