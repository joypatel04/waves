import React, {useEffect, useCallback} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native';
import {Post} from '../../components';
import {FlatList} from 'react-native-gesture-handler';

const Home = ({getAllPostsAsync, posts, savePost, unSavePost}) => {
  const getAllData = useCallback(async () => {
    await getAllPostsAsync();
  }, [getAllPostsAsync]);

  useEffect(() => {
    const init = async () => {
      await getAllData();
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, [getAllData]);

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        initialNumToRender={5}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => {
          return (
            <Post
              item={item}
              onPressSave={savePost}
              onPressUnSave={unSavePost}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

Home.proptypes = {
  getAllPostsAsync: PropTypes.func,
  posts: PropTypes.array,
  savedPost: PropTypes.array,
  savePosts: PropTypes.func,
  unSavePost: PropTypes.func,
};

export default Home;
