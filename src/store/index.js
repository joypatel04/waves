import {init} from '@rematch/core';
import persistPlugin from '@rematch/persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as models from '../models';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['posts', 'myPosts'],
};

const store = init({
  models,
  plugins: [persistPlugin(persistConfig)],
});

export default store;
