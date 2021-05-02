// import axios from 'axios';
import {randomViewsGenerator, randomWaveGenerator} from '../utils/helpers';

const myPosts = {
  state: {
    data: [],
  },
  reducers: {
    updateMyPostsSuccess: (state, data) => {
      try {
        const id = `${randomWaveGenerator(0, 10000)}waves${Math.floor(
          Math.random() * 10000,
        )}`;
        const views = randomViewsGenerator(0, 2000);
        const post = {
          id,
          name: 'Joy Patel',
          username: 'joy',
          email: 'joy.patel@outlook.com',
          phone: '+919265350142',
          website: '',
          userId: '44',
          title: data.title,
          body: data.story,
          views: `${views} Views`,
          waves: 215,
          userSentWaves: true,
          hasSaved: false,
          isMyPost: true,
          profileImageUrl:
            'https://user-images.githubusercontent.com/18585502/116792497-95f11b00-aade-11eb-9819-f6c56b6eff99.png',
        };

        return {
          ...state,
          data: [post, ...state.data],
        };
      } catch (e) {
        console.log(e);
        return {
          ...state,
        };
      }
    },
  },
  effects: (dispatch) => ({
    async updateMyPost(data) {
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
        console.log(e);
      }
    },
  }),
};

export default myPosts;
