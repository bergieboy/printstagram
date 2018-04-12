import React from 'react';

export const PhotoLikes = ({photo, unLikePhoto, likePhoto, numLikes}) => {
  let likeButton;
  let buttonDivClass;
  let buttonClass;
  if (photo.currentUserLikes) {
    likeButton = unLikePhoto;
    buttonDivClass = 'true';
    buttonClass = "fas fa-heart";
  } else {
    likeButton = likePhoto;
    buttonDivClass = 'false';
    buttonClass = "far fa-heart";
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
      <h1 className='like-count'>{numLikes}</h1>
    </section>
  );
};
