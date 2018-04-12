import values from 'lodash/values';

export const userSelector = state => {
  return (Object.values(state.entities.users));
};

export const photoSelector = state => {
  return (Object.values(state.entities.photos));
};

export const commentSelector = state => {
  return (Object.values(state.entities.comments));
};

export const selectPhotosForUser = (state, userId) => {
  const allPhotos = photoSelector(state);
  return allPhotos.filter((photo) => photo.author_id === userId);
};

export const selectCommentsForPhoto = (state, photoId) => {
  const allComments = commentSelector(state);
  const comments = allComments.filter((comment) => comment.photo_id === parseInt(photoId));
  return comments;
};

export const selectFeaturedUsers = (state) => {
  const featuredUsers = userSelector(state).slice(1, 5);
  return featuredUsers;
};
