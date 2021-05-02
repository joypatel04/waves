import React, {useEffect, useCallback, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {EmptyList, Post, SearchBar} from '../../components';
import {searchThoughPosts} from '../../utils/helpers';

const Home = ({getAllPostsAsync, posts, savePost, unSavePost, sentWaves}) => {
  const [allPosts, setAllPosts] = useState(posts);

  useEffect(() => {
    setAllPosts(posts);
  }, [posts]);

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

  const searchPost = (query) => {
    if (query.length === 0) {
      setAllPosts(posts);
      return null;
    }
    const newData = searchThoughPosts({query, posts});
    setAllPosts(newData);
  };

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={allPosts}
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
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <SearchBar onSearch={(text) => searchPost(text)} />
        }
        ListEmptyComponent={
          <EmptyList
            containerStyle={styles.emptyListContainer}
            title="No result found"
          />
        }
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
  emptyListContainer: {height: 80},
});

export default Home;
