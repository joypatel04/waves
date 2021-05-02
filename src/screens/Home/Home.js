import React, {useEffect, useCallback, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet} from 'react-native';
import {EmptyList, Post, SearchBar} from '../../components';
import {FlatList} from 'react-native-gesture-handler';

const Home = ({getAllPostsAsync, posts, savePost, unSavePost, sentWaves}) => {
  const [searchedData, setSearchedData] = useState(null);
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
      setSearchedData(null);
      return null;
    }

    const lowecaseStr = query.toLowerCase();
    const regex = new RegExp(lowecaseStr, 'g');

    const newData = posts.filter((item) => {
      const title = item.title.toLowerCase();
      const body = item.body.toLowerCase();
      const name = item.name.toLowerCase();
      const username = item.username.toLowerCase();
      if (
        regex.exec(title) ||
        regex.exec(body) ||
        regex.exec(name) ||
        regex.exec(username)
      ) {
        return item;
      }
    });
    setSearchedData(newData);
  };

  console.log(searchedData);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={searchedData || posts}
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
