import React, {useEffect, useCallback} from 'react';
import {SafeAreaView, Linking, Alert, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import {ProfileHeader, PostEncourage, Post} from '../../components';
import {userData} from './userData';
import {getRequestedUrl} from '../../utils/helpers';
import styles from './styles';

const Profile = ({
  navigation,
  getAllUsers,
  users: following, // Treating users as following.
  myPosts,
}) => {
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const onPressWrite = useCallback(() => {
    navigation.navigate('WritePost');
  }, [navigation]);

  const onPressActionables = useCallback(async ({type}) => {
    const url = getRequestedUrl({type, value: userData[type]});
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={myPosts}
        initialNumToRender={5}
        maxToRenderPerBatch={20}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => {
          return <Post item={item} />;
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <ProfileHeader
              onPressActionables={onPressActionables}
              following={following.length}
              onPressFollowing={() => {
                navigation.navigate('Following', {following});
              }}
            />
            <PostEncourage hasMyPost={myPosts.length} onPress={onPressWrite} />
          </>
        }
      />
    </SafeAreaView>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
  getAllUsers: PropTypes.func,
  users: PropTypes.array,
  myPosts: PropTypes.array,
};

export default Profile;
