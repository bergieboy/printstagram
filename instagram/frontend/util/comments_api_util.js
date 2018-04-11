export const fetchComments = (photoId) => (
  $.ajax({
    url: `api/photos/${photoId}/comments`,
    method: 'GET',
    data: {photoId}
  })
);

export const createComment = (comment) => (
  $.ajax({
    url: `api/photos/${comment.photo_id}/comments`,
    method: 'POST',
    data: { comment },
  })
);

export const deleteComment = (id) => (
  $.ajax({
    url: `api/comments/${id}`,
    method: 'DELETE'
  })
);
