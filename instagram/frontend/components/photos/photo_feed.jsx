import React from 'react';
import PhotoFeedItem from './photo_feed_item';

class PhotoFeed extends React.Component {

  componentDidMount(){
    this.props.fetchPhotos();
  }

  render () {
    const photos = this.props.photos.map( (photo) => {
      return (
        <PhotoFeedItem
          key={photo.id}
          post={photo}
          deletePost={this.props.deletePhoto}
          />
      );
    });
    return (
      <div>
        <ul>
          {photos}
        </ul>
      </div>
    );
  }
}

export default PostIndex;
