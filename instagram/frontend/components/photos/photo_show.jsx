import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../user_profile/user_avatar';
import { PhotoLikes } from '../likes/photo_likes';
import CommentIndex from '../comments/comments_index';

class PhotoShow extends React.Component {

  componentDidMount(){
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  handleDeletePhoto(id){
    this.props.deletePhoto(id).then(() => this.props.history.push(`/${this.props.currentUser.id}`));
  }

  render () {
    const { photo } = this.props;

    if (!photo) {
      return (
        <div>Loading...</div>
      );
    }

    let numLikes;
    if (this.props.photo.like_count === 0) {
      numLikes = "";
    } else {
      numLikes = this.props.photo.like_count;
    }

    return (
      <div className='photo-show-container'>
        <div className='photo-show-image'>
          <img src={this.props.photo.img_url}/>
        </div>
        <div className='photo-show-sidebar'>
          <div className='photo-show-avatar'>
            <UserAvatar
              userId={this.props.photo.author_id}
              imgUrl={this.props.photo.author_img}
              username={this.props.photo.author_username}
              name={this.props.photo.author_name}/>
            <button onClick={()=>this.handleDeletePhoto(this.props.photo.id)}>Delete Photo</button>
          </div>
          <PhotoLikes
            photo={this.props.photo}
            likePhoto ={this.props.likePhoto}
            unLikePhoto ={this.props.unLikePhoto}
            numLikes={numLikes}/>
          <CommentIndex
            photo={this.props.photo}
            comments={this.props.comments}
            createComment={this.props.createComment}
            deleteComment={this.props.deleteComment}
            currentUser={this.props.currentUser}/>
        </div>

      </div>
    );
  }
}

export default PhotoShow;
