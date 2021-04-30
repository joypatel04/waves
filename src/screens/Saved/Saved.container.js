import {connect} from 'react-redux';
import Saved from './Saved';

const mapState = (state) => {
  const posts = state.posts.transformData.filter((item) => item.hasSaved);
  return {
    posts,
  };
};

const mapDispatch = (dispatch) => ({
  unSavePost: dispatch.posts.unSavePost,
  sentWaves: dispatch.posts.sentWaves,
});

export default connect(mapState, mapDispatch)(Saved);
