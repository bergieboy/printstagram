import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log in',
    formHeader: '',
    formAlt: 'Don\'t have an Account? ',
    navLink: <Link to="/signup"> Sign up</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  const demoUser = { username: "DemoUser4Lyfe", password: "PASSWORD"};
  return {
    processForm: (user) => dispatch(login(user)),
    demoLogin: () => dispatch(login(demoUser)),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
