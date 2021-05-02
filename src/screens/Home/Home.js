import React, {useEffect, useCallback} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Post} from '../../components';
import {FlatList} from 'react-native-gesture-handler';

const Home = ({getAllPostsAsync, posts, savePost, unSavePost, sentWaves}) => {
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
        contentContainerStyle={styles.flatListContainer}
        data={posts}
        initialNumToRender={5}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Post
              item={item}
              onPressSave={savePost}
              onPressUnSave={unSavePost}
              sentWaves={sentWaves}
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
  savePosts: PropTypes.func,
  unSavePost: PropTypes.func,
  sentWaves: PropTypes.func,
};

const styles = StyleSheet.create({
  flatListContainer: {paddingBottom: 16},
});

export default Home;
