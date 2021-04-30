import React from 'react';
import {Card} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const Post = ({item}) => {
  return (
    <Card>
      <Card.FeaturedTitle style={styles.title}>{item.title}</Card.FeaturedTitle>
      <Card.FeaturedSubtitle style={styles.subTitle}>
        {item.body}
      </Card.FeaturedSubtitle>
    </Card>
  );
};

Post.proptypes = {
  item: PropTypes.object,
};

export default Post;
