import {connect} from 'react-redux';
import Home from './Home';

const mapState = (state) => ({
  count: state.count,
});

const mapDispatch = (dispatch) => ({
  increment: dispatch.count.increment,
  asyncIncrement: dispatch.count.incrementAsync,
  resetCount: dispatch.count.reset,
});

export default connect(mapState, mapDispatch)(Home);
