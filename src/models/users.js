import axios from 'axios';
import idx from 'idx';

const users = {
  state: {
    data: [],
    isLoading: false,
    isError: null,
  },
  reducers: {
    getUsersLoading(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    getUsersSuccess(state, payload) {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    },
    getUsersError(state, error) {
      return {
        ...state,
        isLoading: false,
        error,
      };
    },
    reset() {
      return 0;
    },
  },
  effects: (dispatch) => ({
    async getAllUsersAsync() {
      try {
        dispatch.users.getUsersLoading();
        const resp = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );

        const {status, data} = idx(resp, (_) => _) || {
          status: null,
          data: [],
        };

        if (status === 200) {
          dispatch.users.getUsersSuccess(data);
          return;
        }
        dispatch.users.getUsersError(null);
      } catch (e) {
        dispatch.users.getUsersError(e);
      }
    },
  }),
};

export default users;
