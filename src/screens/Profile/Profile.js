import React, {useEffect, useCallback} from 'react';
import {SafeAreaView, Linking, Alert} from 'react-native';
import {ProfileHeader, PostEncourage} from '../../components';
import {userData} from './userData';
import {getRequestedUrl} from '../../utils/helpers';

const Profile = ({
  navigation,
  getAllUsers,
  users: following, // Treating users as following.
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
      <ProfileHeader
        onPressActionables={onPressActionables}
        following={following.length}
        onPressFollowing={() => {
          navigation.navigate('Following', {following});
        }}
      />
      <PostEncourage onPress={onPressWrite} />
    </SafeAreaView>
  );
};

export default Profile;
