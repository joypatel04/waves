import axios from 'axios';
import idx from 'idx';
import {randomViewsGenerator, randomWaveGenerator} from '../utils/helpers';

const posts = {
  state: {
    data: [],
    isLoading: false,
    isError: null,
    transformData: [],
  },
  reducers: {
    getPostsLoading(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    getPostsSuccess(state, payload) {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    },
    getPostsError(state, error) {
      return {
        ...state,
        isLoading: false,
        error,
      };
    },
    getTransformData(state, payload) {
      return {
        ...state,
        transformData: payload,
      };
    },
    savePost: (state, post) => {
      const index = state.transformData.findIndex(
        (item) => item.id === post.id,
      );

      const transformData = [...state.transformData];
      transformData[index].hasSaved = true;
      return {
        ...state,
        transformData: transformData,
      };
    },
    unSavePost: (state, post) => {
      const index = state.transformData.findIndex(
        (item) => item.id === post.id,
      );

      const transformData = [...state.transformData];
      transformData[index].hasSaved = false;
      return {
        ...state,
        transformData: transformData,
      };
    },
    sentWaves: (state, post) => {
      const index = state.transformData.findIndex(
        (item) => item.id === post.id,
      );

      const transformData = [...state.transformData];
      const userSentWaves = transformData[index].userSentWaves;
      if (!userSentWaves) {
        transformData[index].userSentWaves = true;
      }

      transformData[index].waves = transformData[index].waves + 1;

      return {
        ...state,
        transformData: transformData,
      };
    },
  },
  effects: (dispatch) => ({
    async getAllPostsAsync() {
      try {
        dispatch.posts.getPostsLoading();
        const respComments = await axios.get(
          'https://jsonplaceholder.typicode.com/comments',
        );

        const respPosts = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );

        const respUsers = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );

        const {data: commentsData} = idx(respComments, (_) => _) || {
          status: null,
          data: [],
        };

        const {status: postsStatus, data: postsData} = idx(
          respPosts,
          (_) => _,
        ) || {
          status: null,
          data: [],
        };

        const {status: usersStatus, data: usersData} = idx(
          respUsers,
          (_) => _,
        ) || {
          status: null,
          data: [],
        };

        const transformData = postsData.map((item) => {
          const particularUser = usersData.find(
            (user) => user.id === item.userId,
          );

          const comments = commentsData.filter(
            (comment) => comment.postId === item.id,
          );

          return {
            ...particularUser,
            ...item,
            userId: particularUser.id,
            views: `${randomViewsGenerator(3000, 6000)} Views`,
            waves: randomWaveGenerator(100, 600),
            userSentWaves: false,
            hasSaved: false,
            isMyPost: false,
            profileImageUrl: null,
            comments,
          };
        });

        if (postsStatus === 200) {
          dispatch.posts.getPostsSuccess(postsData);
        }

        if (postsStatus === 200 && usersStatus === 200) {
          dispatch.posts.getTransformData(transformData);
          return;
        }
        dispatch.posts.getPostsError(null);
      } catch (e) {
        dispatch.posts.getPostsError(e);
      }
    },
  }),
};

export default posts;
