import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../user_profile/user_avatar';
import { PhotoLikes } from '../likes/photo_likes';

class PhotoFeedItem extends React.Component {
  constructor(props){
    super(props);
  }

render() {
  let numLikes;
  if (this.props.photo.like_count === 0) {
    numLikes = "";
  } else {
    numLikes = this.props.photo.like_count;
  }
  return (
      <li className = 'photo-feed-li'>
        <UserAvatar
          userId={this.props.photo.author_id}
          imgUrl={this.props.photo.author_img}
          username={this.props.photo.author_username}
          name={this.props.photo.author_name}/>
        <img src={this.props.photo.img_url}/>
        <PhotoLikes
          photo={this.props.photo}
          likePhoto ={this.props.likePhoto}
          unLikePhoto ={this.props.unLikePhoto}
          numLikes={numLikes}/>
      </li>
    );
  }
}
export default PhotoFeedItem;
