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
            <h1>{comment.user_username}</h1>
            <p>{comment.body}</p>
          </div>
          <button onClick={()=> this.props.deleteComment(comment.id)}>x</button>
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
