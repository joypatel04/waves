import axios from 'axios';
import idx from 'idx';

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
  },
  effects: (dispatch) => ({
    async getAllPostsAsync() {
      try {
        dispatch.posts.getPostsLoading();
        const respPosts = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );

        const respUsers = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );

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

          return {
            ...particularUser,
            ...item,
            userId: particularUser.id,
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
