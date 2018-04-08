import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import {
  fetchPhotos,
  fetchPhoto,
  deletePhoto,
 } from '../../actions/photo_actions';

const mapStatetoProps = ({ entities }) => ({
  photos: Object.keys(entities.photos).map((id => entities.photos[id]))
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(PhotoFeed);
