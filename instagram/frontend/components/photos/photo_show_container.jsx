import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import {
  fetchPhoto,
  deletePhoto,
  likePhoto,
  unLikePhoto,
} from '../../actions/photo_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStatetoProps = (state, ownProps) => {
  return {
    photo: state.entities.photos[ownProps.match.params.photoId],
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
  likePhoto: (id) => dispatch(likePhoto(id)),
  unLikePhoto: (id) => dispatch(unLikePhoto(id)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(PhotoShow);
