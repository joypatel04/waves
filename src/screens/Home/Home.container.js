import {connect} from 'react-redux';
import Home from './Home';

const mapState = (state) => ({
  // Separate users and posts data
  // users: state.users.data,
  // posts: state.posts.data,
  // Combined data of posts with appropriate users info
  posts: state.posts.transformData,
  isLoading: state.posts.isLoading,
});

const mapDispatch = (dispatch) => ({
  getAllPostsAsync: dispatch.posts.getAllPostsAsync,
  savePost: dispatch.posts.savePost,
  unSavePost: dispatch.posts.unSavePost,
  sentWaves: dispatch.posts.sentWaves,
});

export default connect(mapState, mapDispatch)(Home);
