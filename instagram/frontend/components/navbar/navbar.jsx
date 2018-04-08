
import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    const {currentUser} = this.props;

    return (
      <div className='header'>
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
            <Link to={`/${currentUser.username}`} className='profile-pg'></Link>
          </div>
        </hgroup>
      </div>
    );
  }
}


export default NavBar;
