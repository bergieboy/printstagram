import merge from 'lodash/merge';

import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW,
} from '../actions/follow_actions';

import { RECEIVE_USER } from '../actions/user_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_FOLLOW:
      return merge({}, state, { [action.payload.follow.id]: action.payload.follow });

    case REMOVE_FOLLOW:
      let newState = merge({}, state);
      delete newState[action.payload.follow.id];
      return newState;

    case RECEIVE_USER:
      return merge({}, action.payload.follow);

    default:
      return state;
  }
};

export default followsReducer;
