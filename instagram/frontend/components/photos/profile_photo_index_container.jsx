import { connect } from 'react-redux';
import React from 'react';
import {fetchPhotos} from  '../../actions/photo_actions';
import ProfilePhotoIndex from './profile_photo_index';
import {selectPhotosForUser} from '../../selectors/photo_selector';

const mapStatetoProps = (state, ownProps) => {
  console.log(ownProps);
  return {photos: selectPhotosForUser(state, ownProps.userId),
    profileUser: ownProps.userId,};
};

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (userId) => dispatch(fetchPhotos(userId)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(ProfilePhotoIndex);
