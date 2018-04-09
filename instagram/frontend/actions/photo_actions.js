import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

const removePhoto = (photoId) => ({
  type: REMOVE_PHOTO,
  photoId
});

export const fetchPhotos = (userId) => dispatch => (
  APIUtil.fetchPhotos(userId).then( photos =>
    dispatch(receivePhotos(photos)))
);

export const fetchPhoto = id => dispatch => (
  APIUtil.fetchPhoto(id).then( photo =>
    dispatch(receivePhoto(photo)))
);

export const createPhoto = photo => dispatch => (
  APIUtil.createPhoto(photo).then( photo =>
    dispatch(receivePhoto(photo)))
);

export const deletePhoto = photoId => dispatch => (
  APIUtil.deletePhoto(photoId).then( photo =>
    dispatch(removePhoto(photoId)))
);
