const count = {
  state: 0,
  reducers: {
    increment(state, payload) {
      return state + payload;
    },
    reset() {
      return 0;
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
};

export default count;
