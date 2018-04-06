export const fetchUsers = () => (
  $.ajax({
    url: `api/users`,
    method: 'GET'
  })
);
export const fetchUser = (id) => (
  $.ajax({
    url: `api/users/${id}`,
    method: 'GET'
  })
);
