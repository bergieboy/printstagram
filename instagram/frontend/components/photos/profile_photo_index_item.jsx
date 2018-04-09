import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePhotoIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

render() {

  return (
      <li className = 'profile-photo-index-li'>
        <img src={this.props.photo.img_url}/>
      </li>
    );
  }
}
export default ProfilePhotoIndexItem;
