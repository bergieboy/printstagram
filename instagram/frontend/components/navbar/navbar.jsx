
import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    const {currentUser} = this.props;

    return (
      <div>
        <div className='navbar-fixed'>
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
                <Link className='add-photo-button' to='/new'>+ Add Photo</Link>
              </div>
              <div className="nav-links">
                <Link to='/' className='discover-pg'></Link>
                <Link to='/' className='notifications-pg'></Link>
                <Link to={`/${currentUser.id}`} className='profile-pg'></Link>
              </div>
            </hgroup>
          </div>
        </div>
      </div>
    );
  }
}


export default NavBar;
