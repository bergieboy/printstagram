
import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const NavBar = ({currentUser, logout}) => (
  <div>
    <hgroup className="header-group">
      <div className="logo-group">
        <Link className='logo-group' to='/'>
          <div className="logo-icon"></div>
          <div className="vl"></div>
          <div className="header-name">
            <h2>Printstagram</h2>
          </div>
        </Link>
      </div>
      <div className="add-photo">
          <button className='add-photo-button' >+ Add Photo</button>
      </div>
      <div className="nav-links">
        <Link to='/' className='discover-pg'></Link>
        <Link to='/' className='notifications-pg'></Link>
        <Link to='/' className='profile-pg'></Link>
      </div>
    </hgroup>
    <section>
      <button className="header-button" onClick={logout}>Log Out</button>
    </section>
  </div>
);

// const NavBarTemp = ({ currentUser, logout }) => (
//   currentUser ? navBarTemp(currentUser, logout) : sessionLinks()
// );

export default NavBar;
