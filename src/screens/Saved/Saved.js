import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {EmptyList, Post, SearchBar} from '../../components';
import {searchThoughPosts} from '../../utils/helpers';

const Saved = ({posts, savePost, unSavePost, sentWaves, navigation}) => {
  const [allPosts, setAllPosts] = useState(posts);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setAllPosts(posts);
  }, [posts]);

  const searchPost = (query) => {
    setSearchValue(query);
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
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          posts.length && <SearchBar onSearch={(text) => searchPost(text)} />
        }
        ListEmptyComponent={
          searchValue.length ? (
            <EmptyList
              containerStyle={styles.emptyListContainer}
              title="No result found"
            />
          ) : (
            <EmptyList
              hasButton
              subTitle="Tap the bookmark icon on posts to save them fot later, even offline"
              onPress={() => navigation.navigate('Home')}
            />
          )
        }
      />
    </SafeAreaView>
  );
};

Saved.proptypes = {
  posts: PropTypes.array,
  savePosts: PropTypes.func,
  unSavePost: PropTypes.func,
  sentWaves: PropTypes.func,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  flatListContainer: {paddingBottom: 16},
  emptyListContainer: {height: 80},
});

export default Saved;
