export const fetchUsers = () => (
  $.ajax({
    url: `api/users`,
    method: 'GET'
  })
);
export const fetchUser = (username) => (
  $.ajax({
    url: `api/users/${username}`,
    method: 'GET'
  })
);

export const updateUser = (formData) => (
  $.ajax({
    url: `api/users/${formData.get('user[username]')}`,
    method: 'PATCH',
    processData: false,
    contentType: false,
    data: formData,
  })
);
