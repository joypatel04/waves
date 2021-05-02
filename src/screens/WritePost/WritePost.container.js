import {connect} from 'react-redux';
import WritePost from './WritePost';

const mapState = () => ({});

const mapDispatch = (dispatch) => ({
  updateMyPost: dispatch.myPosts.updateMyPost,
});

export default connect(mapState, mapDispatch)(WritePost);
