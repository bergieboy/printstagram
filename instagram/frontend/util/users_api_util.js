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

export const updateUser = (formData) => (
  $.ajax({
    url: `api/users/${formData.get('user[id]')}`,
    method: 'PATCH',
    processData: false,
    contentType: false,
    data: formData,
  })
);
