import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        photoId: this.props.photo.photo_id,
        body: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){

    let comments = this.props.comments
    .filter( comment =>
      comment.photo_id === this.props.photo.id
    );

    comments = comments.sort( (a,b) => a.id - b.id)
    .map( comment => {
      return(
        <li>
          <h1>{comment.user_username}</h1>
          <p>{comment.body}</p>
        </li>
      );
    });

    return(
      <div>
        <ul>
          {comments}
        </ul>
      </div>
    );
  }

}

export default CommentIndex;
