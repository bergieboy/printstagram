import * as APIUtil from '../util/comments_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveComment = ({comment, photo}) => ({
  type: RECEIVE_COMMENT,
  comment,
  photo
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
});


export const fetchComments = (photoId) => dispatch => (
  APIUtil.fetchComments(photoId).then( comments =>
    dispatch(receiveComments(comments)))
);

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then( comment =>
    dispatch(receiveComment(comment)))
);

export const deleteComment = commentId => dispatch => (
  APIUtil.deleteComment(commentId).then( comment =>
    dispatch(removeComment(commentId)))
);
