import React from 'react';
import { Link } from 'react-router-dom';


class FollowButton extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps){
    if (this.props.followed) {
      this.props.fetchUser(newProps.user.id);
    }
  }

  render () {

    let button;
    if (this.props.user.id === this.props.currentUser.id) {
      return (
        <Link className='edit-button' to={`/${this.props.user.id}/edit`}>Edit Profile</Link>
      );
    } else if (this.props.followed) {
      return (
        <button
          className='edit-button'
          onClick={ () => this.props.deleteFollow(this.props.user.id)}>
          Following
        </button>
      );
    } else {
      return (
        <button
          className='edit-button'
          onClick={ () => this.props.createFollow(this.props.user.id)}>
          Follow
        </button>
      );
    }
  }
}

export default FollowButton;
