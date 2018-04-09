import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PhotoUpload from './photo_upload';
import {
  createPhoto,
 } from '../../actions/photo_actions';

const mapStatetoProps = ({ session }) => {
  return {currentUser: session.currentUser};
};

const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhoto(photo))
});

export default connect(mapStatetoProps, mapDispatchToProps)(PhotoUpload);
