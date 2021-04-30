import React, {useEffect, useCallback} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaView} from 'react-native';
import {Post} from '../../components';
import {FlatList} from 'react-native-gesture-handler';

const Home = ({getAllUsersAsync, getAllPostsAsync, posts, users}) => {
  const getAllData = useCallback(async () => {
    // await getAllUsersAsync();
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
        renderItem={({item}) => <Post item={item} />}
      />
    </SafeAreaView>
  );
};

export default Home;
