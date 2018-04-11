import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import {photoSelector} from '../../selectors/photo_selector';
import {
  fetchPhotos,
  fetchPhoto,
  deletePhoto,
  likePhoto,
  unLikePhoto,
 } from '../../actions/photo_actions';
 import {fetchUsers} from '../../actions/user_actions';


const mapStatetoProps = (state) => ({
  photos: photoSelector(state),
  likes: state.entities.likes,
  comments: state.entities.comments,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
  fetchUsers: () => dispatch(fetchUsers()),
  likePhoto: (id) => dispatch(likePhoto(id)),
  unLikePhoto: (id) => dispatch(unLikePhoto(id)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(PhotoFeed);
