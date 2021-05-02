// import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import {randomViewsGenerator} from '../utils/helpers';

const myPosts = {
  state: {
    data: [],
    isLoading: false,
    isError: null,
  },
  reducers: {
    updateMyPostsLoading(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    updateMyPostsSuccess(state, data) {
      const post = {
        id: uuidv4(),
        name: 'Joy Patel',
        username: 'joy',
        email: 'joy.patel@outlook.com',
        phone: '+919265350142',
        website: '',
        userId: '44',
        title: data.title,
        body: data.story,
        views: `${randomViewsGenerator(0, 2000)} Views`,
        waves: 215,
        userSentWaves: true,
        hasSaved: false,
        isMyPost: true,
        profileImageUrl:
          'https://user-images.githubusercontent.com/18585502/116792497-95f11b00-aade-11eb-9819-f6c56b6eff99.png',
      };
      return {
        ...state,
        isLoading: false,
        data: [post, ...state.data],
      };
    },
    updateMyPostsError(state, error) {
      return {
        ...state,
        isLoading: false,
        error,
      };
    },
  },
  effects: (dispatch) => ({
    async updateMyPost(data) {
      dispatch.myPosts.updateMyPostsLoading();
      try {
        // API Call to post new data to backend
        /*
        const {title, story} = data;
        const resp = axios.post('URL', {
          title,
          body: story,
        });

        const {status} = resp;

        if (status === 200) {
          dispatch.myPosts.updateMyPostsSuccess(data);
        }
        */
        dispatch.myPosts.updateMyPostsSuccess(data);
      } catch (e) {
        dispatch.myPosts.updateMyPostsError(e);
      }
    },
  }),
};

export default myPosts;
