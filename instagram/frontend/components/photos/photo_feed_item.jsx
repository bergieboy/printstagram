import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../user_profile/user_avatar';

class PhotoFeedItem extends React.Component {
  constructor(props){
    super(props);
  }

render() {

  return (
      <li className = 'photo-feed-li'>
        <UserAvatar
          userId={this.props.photo.author_id}
          imgUrl={this.props.photo.author_img}
          username={this.props.photo.author_username}
          name={this.props.photo.author_name}/>
        <img src={this.props.photo.img_url}/>
      </li>
    );
  }
}
export default PhotoFeedItem;
