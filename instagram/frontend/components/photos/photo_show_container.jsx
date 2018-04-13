import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import {selectCommentsForPhoto} from '../../selectors/photo_selector';

import {
  fetchPhoto,
  deletePhoto,
  likePhoto,
  unLikePhoto,
} from '../../actions/photo_actions';

import {
  createComment,
  deleteComment,
} from '../../actions/comment_actions';

const mapStatetoProps = (state, ownProps) => ({
    photo: state.entities.photos[ownProps.match.params.photoId],
    comments: selectCommentsForPhoto(state, ownProps.match.params.photoId),
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
  likePhoto: (id) => dispatch(likePhoto(id)),
  unLikePhoto: (id) => dispatch(unLikePhoto(id)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(PhotoShow);
