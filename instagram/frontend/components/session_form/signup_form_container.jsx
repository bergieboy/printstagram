import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign up',
    formHeader: 'Sign up to see photos from your friends.',
    formAlt: 'Have an Account? ',
    navLink: <Link to="/login"> Log in</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  const demoUser = { username: "DEMO", password: "PASSWORD"};
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    processForm: (user) => dispatch(signup(user)),
    demoLogin: () => dispatch(login(demoUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
