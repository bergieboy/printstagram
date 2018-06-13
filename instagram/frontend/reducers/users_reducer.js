import merge from 'lodash/merge';

import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, action.users);

    case RECEIVE_USER:
      return merge(
        {},
        state,
        {[action.payload.user.id]: action.payload.user}
      );

    case RECEIVE_FOLLOW:
      return merge(
        {},
        state,
        {[action.payload.user.id]: action.payload.user}
      );

    case REMOVE_FOLLOW:
      let newState = merge({}, state);
      newState[action.payload.user.id]
        .followers_by_id = newState[action.payload.user.id]
        .followers_by_id
        .filter(id => id !== action.payload.follow.id);
      return newState;

    default:
      return state;
  }
};

export default usersReducer;
