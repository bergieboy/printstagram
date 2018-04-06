import React from 'react';

const UserProfile = ({currentUser, logout}) => (
  <div>
    <header>
      <div className='profile-pic'>{console.log(currentUser)}
        <img src={currentUser.img_url} />
      </div>
      <section className='user-info'>
        <div className='user-info-header'>
          <h1>{currentUser.username}</h1>
          <button to={`/users/${currentUser.id}/edit`}>Edit Profile</button>
          <button className="header-button" onClick={logout}>Log Out</button>
        </div>
        <ul className='user-stats'>
          <li>XX photos</li>
          <li>XX followers</li>
          <li>XX following</li>
        </ul>
        <div className='user-bio'>
          <h1>{currentUser.username}</h1>
          <span>{currentUser.bio}</span>
        </div>
      </section>
    </header>

  </div>
);


export default UserProfile;
