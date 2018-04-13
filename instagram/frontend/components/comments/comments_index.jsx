import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        photoId: this.props.photo.id,
        userId: this.props.currentUser.id,
        body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field){
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createComment(this.state)
    .then(() => this.setState({body: ""}));
  }

  toggleDelete(userId){
    let deleteClass;
    if (
      (this.props.currentUser.id === userId)
      || (this.props.currentUser.id === this.props.photo.user_id)
    ) {
      deleteClass = 'visible';
    } else {
      deleteClass = 'hidden';
    }
    return deleteClass;
  }

  commentRender(){
    let comments = this.props.comments
    .filter( comment =>
      comment.photo_id === this.props.photo.id
    );

    comments = comments.sort( (a,b) => a.id - b.id)
    .map( comment => {
      return(
        <li key={comment.id}>
          <div className='comment-details'>
            <Link
              to={`/${comment.user_id}`}>
              <h1>{comment.user_username}</h1>
            </Link>
            <p>{comment.body}</p>
          </div>
          <div className={this.toggleDelete(comment.user_id)}>
            <button
              onClick={()=> this.props.deleteComment(comment.id)}>
              x
            </button>
          </div>
        </li>
      );
    });

    return comments;
  }


  render(){
    const comments = this.commentRender();

    return(
      <div className='comments'>
        <ul className='comments-ul'>
          {comments}
        </ul>
        <div className ='time-stamp'>{this.props.photo.timeStamp}</div>
        <form onSubmit={this.handleSubmit}>
          <label className='comment-body-input'>
            <input
              id="comment-input"
              type='text'
              placeholder='Add a comment...'
              value={this.state.body}
              onChange={this.update('body')}/>
          </label>
          <div className='comment-submit-btn'>
            <input type='submit'/>
          </div>
        </form>
      </div>
    );
  }

}

export default CommentIndex;
