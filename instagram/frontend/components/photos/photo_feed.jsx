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
    const photos = this.props.photos
    .sort((a, b) => b.id - a.id)
    .map( photo => {
      return (
        <PhotoFeedItem
          key={photo.id}
          photo={photo}
          deletePhoto={this.props.deletePhoto}
          likePhoto={this.props.likePhoto}
          unLikePhoto={this.props.unLikePhoto}
          comments={this.props.comments}
          createComment={this.props.createComment}
          deleteComment={this.props.deleteComment}
          currentUser={this.props.currentUser}/>
      );
    });

    return (
      <div className='photo-feed-container'>
        <div className='photo-container'>
          <ul className= 'photo-feed-ul'>
            {photos}
          </ul>
        </div>
        <div className='photo-feed-sidebar'>
          <div className='user-avatar'>
            <UserAvatar
              userId={this.props.currentUser.id}
              imgUrl={this.props.currentUser.img_url}
              username={this.props.currentUser.username}
              name={this.props.currentUser.name}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoFeed;
