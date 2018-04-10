import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../user_profile/user_avatar';

class PhotoShow extends React.Component {

  componentDidMount(){
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  render () {
    const { photo } = this.props;

    if (!photo) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div className='photo-show-container'>
        <div className='photo-show-image'>
          <img src={this.props.photo.img_url}/>
        </div>
        <div className='photo-show-sidebar'>
          <div className='photo-show-avatar'>
            <UserAvatar
              userId={this.props.photo.author_id}
              imgUrl={this.props.photo.author_img}
              username={this.props.photo.author_username}
              name={this.props.photo.author_name}/>
            <button onClick={()=>this.props.deletePhoto()}>Delete Photo</button>
          </div>
        </div>

      </div>
    );
  }
}

export default PhotoShow;
