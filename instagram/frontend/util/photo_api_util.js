const fetchPhotos = () => (
  $.ajax({
    url: `api/photos`,
    method: 'GET'
  })
);
const fetchPhoto = (id) => (
  $.ajax({
    url: `api/photos/${id}`,
    method: 'GET'
  })
);
const deletePhoto = (id) => (
  $.ajax({
    url: `api/photos/${id}`,
    method: 'DELETE'
  })
);
