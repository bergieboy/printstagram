import values from 'lodash/values';

export const photoSelector = state => {
  return (Object.values(state.entities.photos));
};

export const selectPhotosForUser = (state, userId) => {
  const allPhotos = photoSelector(state);
  return allPhotos.filter((photo) => photo.author_id === userId);
};
