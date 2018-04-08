import React from 'react';
import PhotoFeedItem from './photo_feed_item';

class PhotoFeed extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.photos);
  }

  componentDidMount(){
    this.props.fetchPhotos();
  }

  render () {
    const photos = this.props.photos.map( photo => {
      console.log(photo);
      return (
        <PhotoFeedItem
          key={photo.id}
          photo={photo}
          deletePhoto={this.props.deletePhoto}
          />
      );
    });
    return (
      <div className='photo-feed-container'>
        <ul className= 'photo-feed-ul'>
          {photos}
        </ul>
      </div>
    );
  }
}

export default PhotoFeed;
