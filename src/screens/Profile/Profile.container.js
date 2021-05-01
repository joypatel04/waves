import {connect} from 'react-redux';
import Profile from './Profile';

const mapState = (state) => ({
  users: state.users.data,
});

const mapDispatch = (dispatch) => ({
  getAllUsers: dispatch.users.getAllUsersAsync,
});

export default connect(mapState, mapDispatch)(Profile);
