import React from 'react';
import PhotoFeedItem from './photo_feed_item';
import UserAvatar from '../user_profile/user_avatar';

class PhotoFeed extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPhotos();
  }


  render () {
    const photos = this.props.photos.reverse().map( photo => {
      return (
        <PhotoFeedItem
          key={photo.id}
          photo={photo}
          deletePhoto={this.props.deletePhoto}
          likePhoto={this.props.likePhoto}
          unLikePhoto={this.props.unLikePhoto}
          />
      );
    });

    return (
      <div className='photo-feed-container'>
        <div className='photo-container'>
          <ul className= 'photo-feed-ul'>
            {photos}
          </ul>
        </div>
        <div className='user-avatar'>
          <UserAvatar
            userId={this.props.currentUser.id}
            imgUrl={this.props.currentUser.img_url}
            username={this.props.currentUser.username}
            name={this.props.currentUser.name}/>
        </div>
      </div>
    );
  }
}

export default PhotoFeed;
