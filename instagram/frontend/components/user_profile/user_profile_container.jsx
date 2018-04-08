import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  userProf: state.entities.users[ownProps.match.params.username]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
