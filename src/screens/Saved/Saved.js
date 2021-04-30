import React from 'react';
import {SafeAreaView} from 'react-native';
import {Post} from '../../components';
import {FlatList} from 'react-native-gesture-handler';

const Saved = ({posts, savePost, unSavePost}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        initialNumToRender={5}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => {
          if (item.hasSaved) {
            return (
              <Post
                item={item}
                onPressSave={savePost}
                onPressUnSave={unSavePost}
              />
            );
          }
        }}
      />
    </SafeAreaView>
  );
};

export default Saved;
