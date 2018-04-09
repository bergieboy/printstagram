import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import EditProfileForm from './edit_profile_form';
import { fetchUser, updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const userFormInfo = {
    imgUrl: currentUser.img_url,
    username: currentUser.username,
    name: currentUser.name,
    bio: currentUser.bio,
    imgFile: null,
  };
  const editProfPic = 'Edit Profile Photo';
  return {currentUser, userFormInfo, editProfPic};
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (username) => dispatch(fetchUser(username)),
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
