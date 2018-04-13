import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class PhotoLikes extends React.Component {
  constructor(props){
    super(props);
  }

  getFocus() {
    document.getElementById("comment-input").focus();
  }

  render(){
    let likeButton;
    let buttonDivClass;
    let buttonClass;
    if (this.props.photo.currentUserLikes) {
      likeButton = this.props.unLikePhoto;
      buttonDivClass = 'true';
      buttonClass = "fas fa-heart";
    } else {
      likeButton = this.props.likePhoto;
      buttonDivClass = 'false';
      buttonClass = "far fa-heart";
    }
    let commentInput;
    return (
      <section className='likes'>
        <div className='photo-like-button'>
          <div className={buttonDivClass}>
            <button
              className={buttonClass}
              onClick={() => likeButton(this.props.photo.id)}/>
          </div>
          <button
            ref={(input)=> {commentInput = input;}}
            className="far fa-comment"
            onClick={()=>this.getFocus()}/>
        </div>
        <h1 className='like-count'>{this.props.numLikes}</h1>
      </section>
    );
  }
}

export default PhotoLikes;
