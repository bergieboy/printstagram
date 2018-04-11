import merge from 'lodash/merge';

import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/comment_actions';

import { RECEIVE_PHOTOS } from '../actions/photo_actions';

import {RECEIVE_USER} from '../actions/user_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.commentId];
      return newState;

    case RECEIVE_PHOTOS:
      return merge({}, state, action.payload.comments);

    case RECEIVE_USER:
      return merge({}, action.payload.comments);

    default:
      return state;
  }
};

export default commentsReducer;
