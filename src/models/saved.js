import Toast from 'react-native-simple-toast';

const saved = {
  state: {
    data: [],
  },
  reducers: {
    savePost: (state, post) => {
      const hasPost = state.data.filter((item) => item.id === post.id);
      if (hasPost.length === 0) {
        Toast.show('Post Saved');
        return {
          ...state,
          data: [post, ...state.data],
        };
      }

      Toast.show('Post already saved');
      return {
        ...state,
      };
    },
    unSavePost: (state, post) => {
      const data = state.data.filter((item) => item.id !== post.id);
      Toast.show('Post Unsaved');
      return {
        ...state,
        data,
      };
    },
  },
};

export default saved;
