export const fetchPhotos = (userId) => (
  $.ajax({
    url: `api/photos`,
    method: 'GET',
    data: { userId }
  })
);
export const fetchPhoto = (id) => (
  $.ajax({
    url: `api/photos/${id}`,
    method: 'GET'
  })
);

export const createPhoto = (formData) => (
  $.ajax({
    url: `api/photos`,
    method: 'POST',
    processData: false,
    contentType: false,
    data: formData,
  })
);

export const deletePhoto = (id) => (
  $.ajax({
    url: `api/photos/${id}`,
    method: 'DELETE'
  })
);
