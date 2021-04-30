import {connect} from 'react-redux';
import Saved from './Saved';

const mapState = (state) => ({
  posts: state.posts.transformData,
});

const mapDispatch = (dispatch) => ({
  unSavePost: dispatch.posts.unSavePost,
  sentWaves: dispatch.posts.sentWaves,
});

export default connect(mapState, mapDispatch)(Saved);
