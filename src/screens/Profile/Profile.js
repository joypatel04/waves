import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {ProfileHeader, PostEncourage} from '../../components';

import styles from './styles';

export default function Profile() {
  return (
    <SafeAreaView>
      <ProfileHeader />
      <PostEncourage />
    </SafeAreaView>
  );
}
