import { connect } from 'react-redux';
import React from 'react';
import {fetchPhotos} from  '../../actions/photo_actions';
import ProfilePhotoIndex from './profile_photo_index';
import {selectPhotosForUser} from '../../selectors/photo_selector';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStatetoProps = (state, ownProps) => {
  return {
    photos: selectPhotosForUser(state, ownProps.userId),
    profileUser: ownProps.userId,};
};

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (userId) => dispatch(fetchPhotos(userId)),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(ProfilePhotoIndex);
