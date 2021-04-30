import React from 'react';
import {SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import {EmptyList, Post} from '../../components';
import {FlatList} from 'react-native-gesture-handler';

const Saved = ({posts, savePost, unSavePost, sentWaves}) => {
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
              sentWaves={sentWaves}
            />
          );
        }}
        ListEmptyComponent={<EmptyList />}
      />
    </SafeAreaView>
  );
};

Saved.proptypes = {
  posts: PropTypes.array,
  savePosts: PropTypes.func,
  unSavePost: PropTypes.func,
  sentWaves: PropTypes.func,
};

export default Saved;
