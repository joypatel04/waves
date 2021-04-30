import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import PostHeader from './PostHeader';
import Waves from './Waves';
import Saved from './Saved';
import styles from './styles';

const Post = ({item, onPressSave, onPressUnSave, sentWaves}) => {
  const {
    userId,
    name,
    views,
    title,
    body,
    hasSaved,
    waves,
    userSentWaves,
  } = item;

  return (
    <Card containerStyle={styles.cardContainer}>
      <PostHeader userId={userId} name={name} views={views} />
      <Card.FeaturedTitle style={styles.title}>{title}</Card.FeaturedTitle>
      <Card.FeaturedSubtitle style={styles.subTitle}>
        {body}
      </Card.FeaturedSubtitle>
      <View style={[styles.userInfocontainer, styles.spaceContainer]}>
        <Waves
          waves={userSentWaves}
          waveCount={waves}
          onPress={() => sentWaves(item)}
        />
        <Saved
          hasSaved={hasSaved}
          onPress={() => {
            hasSaved ? onPressUnSave(item) : onPressSave(item);
          }}
        />
      </View>
    </Card>
  );
};

Post.proptypes = {
  item: PropTypes.object,
  onPressSave: PropTypes.func,
  onPressUnSave: PropTypes.func,
  sentWaves: PropTypes.func,
};

Post.defaultProps = {
  onPressSave: _noop,
  onPressUnSave: _noop,
};
export default Post;
