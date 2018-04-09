import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePhotoIndexContainer from '../photos/profile_photo_index_container';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(newProps.match.params.userId);
    }
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
          <div className ='profile-header'>
            <header className='user-profile'>
              <div className='profile-pic'>
                <div className='user-pic'>
                  <img src={userProf.img_url} />
                </div>
              </div>
              <section className='user-info'>
                <div className='user-info-header'>
                  <h1>{userProf.username}</h1>
                  <Link className="edit-button" to={`/${userProf.id}/edit`}>Edit Profile</Link>
                  <button className="logout-button" onClick={() => this.props.logout()}>Log Out</button>
                </div>
                <ul className='user-stats'>
                  <li><span>{userProf.photo_count}</span> photos</li>
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
          <div className='profile-photo-index'>
            <ProfilePhotoIndexContainer userId={userProf.id}/>
          </div>
        </div>
    </div>
    );
  }

}


export default UserProfile;
