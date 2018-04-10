import React from 'react';

export const PhotoLikes = ({photo, unLikePhoto, likePhoto}) => {
  let likeButton;
  let buttonDivClass;
  let buttonClass;
  if (photo.currentUserLikes) {
    likeButton = unLikePhoto;
    buttonDivClass = 'true';
    buttonClass = "fontawesome-heart";
  } else {
    likeButton = likePhoto;
    buttonDivClass = 'false';
    buttonClass = "fontawesome-heart-empty";
  }

  return (
    <section className='likes'>
      <div className='photo-like-button'>
        <div className={buttonDivClass}>
          <button
            className={buttonClass}
            onClick={() => likeButton(photo.id)}/>
        </div>
      </div>
      <h1 className='like-count'>{photo.like_count}</h1>
    </section>
  );
};
