import values from 'lodash/values';

export const photoSelector = state => {
  return (Object.values(state.entities.photos));
};
