import React from 'react';
import {View} from 'react-native';
import {Card, Avatar, Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const Post = ({item}) => {
  console.log('item', item);
  return (
    <Card>
      <View style={styles.userInfocontainer}>
        <Avatar
          size="medium"
          rounded
          source={{
            uri: `https://i.pravatar.cc/48?img=${item.userId}`,
          }}
        />
        <View style={styles.nameContainer}>
          <Text h4 style={styles.name}>
            {item.name}
          </Text>
          <Text h5 style={styles.views}>
            {'1.2k Views'}
          </Text>
        </View>
      </View>
      <Card.FeaturedTitle style={styles.title}>{item.title}</Card.FeaturedTitle>
      <Card.FeaturedSubtitle style={styles.subTitle}>
        {item.body}
      </Card.FeaturedSubtitle>
      <View style={styles.userInfocontainer}></View>
    </Card>
  );
};

Post.proptypes = {
  item: PropTypes.object,
};

export default Post;
