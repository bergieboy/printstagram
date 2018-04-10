import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfilePhotoIndexItem from './profile_photo_index_item';

class ProfilePhotoIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const photos = this.props.photos.reverse().map( photo => {
      return (
        <ProfilePhotoIndexItem
          key={photo.id}
          photo={photo}
          openModal={this.props.openModal}
          closeModal={this.props.closeModal}
          />
      );
    });
    return (
      <div className='profile-photo-index-container'>
        <ul className= 'profile-photo-index-ul'>
          {photos}
        </ul>
      </div>
    );
  }
}


export default ProfilePhotoIndex;
