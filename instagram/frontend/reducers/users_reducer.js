import merge from 'lodash/merge';

import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, action.users);
    case RECEIVE_USER:
      return merge({}, state, {[action.payload.user.id]: action.payload.user});
    default:
      return state;
  }
};

export default usersReducer;
