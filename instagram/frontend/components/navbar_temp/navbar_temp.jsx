
import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const logoutButton = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Current User: {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const NavBarTemp = ({ currentUser, logout }) => (
  currentUser ? logoutButton(currentUser, logout) : sessionLinks()
);

export default NavBarTemp;
