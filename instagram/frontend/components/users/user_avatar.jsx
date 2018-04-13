import React from 'react';
import { Link } from 'react-router-dom';

const UserAvatar = ({userId, imgUrl, username, name}) => {
  return (
    <div className='avatar'>
      <div className='avatar-profile-picture'>
        <Link to={`/${userId}`}><img src={imgUrl}/></Link>
      </div>
      <div className='avatar-username'>
        <Link to={`/${userId}`}><h1>{username}</h1></Link>
        <Link to={`/${userId}`}><h2>{name}</h2></Link>
      </div>
    </div>
  );

};

export default UserAvatar;
