import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Avatar, Text} from 'react-native-elements';
import styles from './styles';

const PostHeader = ({userId, name, views, profileImageUrl}) => (
  <View style={styles.userInfocontainer}>
    <Avatar
      size="medium"
      rounded
      source={{
        uri: profileImageUrl
          ? profileImageUrl
          : `https://i.pravatar.cc/200?img=${userId}`,
      }}
    />
    <View style={styles.nameContainer}>
      <Text h4 style={styles.name}>
        {name}
      </Text>
      <Text h5 style={styles.views}>
        {views}
      </Text>
    </View>
  </View>
);

PostHeader.proptypes = {
  userId: PropTypes.string,
  name: PropTypes.string,
  views: PropTypes.string,
};

export default React.memo(PostHeader);
