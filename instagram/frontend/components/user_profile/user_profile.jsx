import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUsers();
  }

  render() {
    const { userProf } = this.props;

    if (!userProf) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <div className='main-content'>
          <header className='user-profile'>
            <div className='profile-pic'>
              <div className='user-pic'>
                <img src={userProf.img_url} />
              </div>
            </div>
            <section className='user-info'>
              <div className='user-info-header'>
                <h1>{userProf.username}</h1>
                <Link className="edit-button" to={`/${userProf.username}/edit`}>Edit Profile</Link>
                <button className="logout-button" onClick={() => this.props.logout()}>Log Out</button>
              </div>
              <ul className='user-stats'>
                <li><span>XX</span> photos</li>
                <li><span>XX</span> followers</li>
                <li><span>XX</span> following</li>
              </ul>
              <div className='user-bio'>
                <h1>{userProf.name}</h1>
                <span>{userProf.bio}</span>
              </div>
            </section>
          </header>
        </div>
    </div>
    );
  }

}


export default UserProfile;
