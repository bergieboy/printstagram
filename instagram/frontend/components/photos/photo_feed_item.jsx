import React from 'react';
import { Link } from 'react-router-dom';

const PhotoFeedItem = ({photo, deletePhoto}) => (
  <div>
    <img src={photo.img_url}/>
    <button onClick={()=>deletePhoto(photo.id)}>Remove Photo</button>
  </div>
);

export default PhotoFeedItem;
