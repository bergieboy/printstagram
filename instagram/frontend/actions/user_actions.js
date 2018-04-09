import * as APIUtil from '../util/users_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = ({user, photos}) => ({
  type: RECEIVE_USER,
  user,
  photos,
});

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then( users =>
    dispatch(receiveUsers(users)))
);

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then( user =>
    dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user).then( user =>
    dispatch(receiveUser(user)))
);
