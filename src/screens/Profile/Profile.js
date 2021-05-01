import React from 'react';
import {SafeAreaView} from 'react-native';
import {ProfileHeader, PostEncourage} from '../../components';

export default function Profile({navigation}) {
  const onPressWrite = () => {
    navigation.navigate('WritePost');
  };
  return (
    <SafeAreaView>
      <ProfileHeader />
      <PostEncourage onPress={onPressWrite} />
    </SafeAreaView>
  );
}
