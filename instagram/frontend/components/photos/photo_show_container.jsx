import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import {photoSelector} from '../../selectors/photo_selector';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions';
import { fetchUsers } from '../../actions/user_actions';


const mapStatetoProps = (state) => ({
  photos: photoSelector(state),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(PhotoFeed);
