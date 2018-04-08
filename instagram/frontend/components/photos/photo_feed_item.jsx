import React from 'react';
import { Link } from 'react-router-dom';

const PhotoFeedItem = ({photo, deletePhoto}) => {
  return (
    <li className = 'photo-feed-li'>
      <img src={photo.img_url}/>
    </li>
  );
};

export default PhotoFeedItem;
