export const createFollow = (followeeId) => {
  return $.ajax({
    url: '/api/follows',
    method: 'POST',
    data: { followeeId }
  });
};

export const deleteFollow = followeeId => {
  return $.ajax({
    url: `/api/follows/${followeeId}`,
    method: 'DELETE',
    data: { followeeId }
  });
};
