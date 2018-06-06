import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';


const mapStateToProps = (state, ownProps) => {
  return (
    {userProf: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser}
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  createFollow: (id) => dispatch(createFollow(id)),
  deleteFollow: (id) => dispatch(deleteFollow(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
