import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({userProf: state.entities.users[ownProps.match.params.userId]});
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
