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

const createPhoto = (photo) => (
$.ajax({
  url: `api/photos/${photo.id}`,
  method: 'GET',
  data: photo,
  })
);

const deletePhoto = (id) => (
  $.ajax({
    url: `api/photos/${id}`,
    method: 'DELETE'
  })
);
