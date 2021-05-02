import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {EmptyList, Post, SearchBar} from '../../components';
import {FlatList} from 'react-native-gesture-handler';

const Saved = ({posts, savePost, unSavePost, sentWaves, navigation}) => {
  const [searchedData, setSearchedData] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const searchPost = (query) => {
    setSearchValue(query);
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
  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={searchedData || posts}
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
});

export default Saved;
