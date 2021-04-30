import React from 'react';
import {View} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import styles from './styles';

const Post = () => {
  return (
    <Card>
      <Card.FeaturedTitle style={styles.title}>
        Improving Redux Reducers in 3 Ways
      </Card.FeaturedTitle>
      <Card.FeaturedSubtitle style={styles.subTitle}>
        Improving Redux Reducers in 3 Ways
      </Card.FeaturedSubtitle>
    </Card>
  );
};

export default Post;
