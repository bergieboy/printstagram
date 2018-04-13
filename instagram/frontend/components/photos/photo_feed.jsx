import React from 'react';
import PhotoFeedItem from './photo_feed_item';
import UserAvatar from '../users/user_avatar';

class PhotoFeed extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPhotos();
    this.props.fetchUsers();
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

    const users = this.props.users.map( user => {

      if (user.id !== this.props.currentUser.id) {
        return (
          <UserAvatar
            key={user.id}
            userId={user.id}
            imgUrl={user.img_url}
            username={user.username}
            name={user.name}/>
        );
      }
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
            <div className='current-user-avatar'>
              <UserAvatar
                userId={this.props.currentUser.id}
                imgUrl={this.props.currentUser.img_url}
                username={this.props.currentUser.username}
                name={this.props.currentUser.name}/>
            </div>
            <h2 className='featured-user-head'>Featured Users</h2>
            <div className='user-profiles'>
              <ul>
                {users}
              </ul>
            </div>
            <footer className='footer'>
              <ul>
                <li><a href='https://github.com/bergieboy'>GitHub</a></li>
                <li><a href='https://www.linkedin.com/in/todd-bergman/'>LinkedIn</a></li>
                <li><a href='https://angel.co/todd-bergman-1'>AngelList</a></li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoFeed;
