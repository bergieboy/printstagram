export const fetchComments = (photoId) => (
  $.ajax({
    url: `api/photos/${photoId}/comments`,
    method: 'GET',
    data: {photoId}
  })
);

export const createComment = (comment) => (
  $.ajax({
    url: `api/photos/${comment.photoId}/comments`,
    method: 'POST',
    data: { comment },
  })
);

export const deleteComment = (commentId) => (
  $.ajax({
    url: `api/comments/${commentId}`,
    method: 'DELETE'
  })
);
