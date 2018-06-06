import * as APIUtil from '../util/follow_api_util.js';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollow = payload => ({
  type: RECEIVE_FOLLOW,
  payload
});

const removeFollow = payload => ({
  type: REMOVE_FOLLOW,
  payload
});

export const createFollow = userId => dispatch => (
  APIUtil.createFollow(userId)
  .then( payload => dispatch(receiveFollow(payload)))
);

export const deleteFollow = userId => dispatch => {
  return (
  APIUtil.deleteFollow(userId)
  .then( payload => dispatch(removeFollow(payload)))
);
};
