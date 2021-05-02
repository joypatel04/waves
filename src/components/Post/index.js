import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

import PostHeader from './PostHeader';
import Waves from './Waves';
import Saved from './Saved';
import styles from './styles';

const Post = ({
  item,
  onPressSave,
  onPressUnSave,
  sentWaves,
  waves,
  hasSaved,
  userSentWaves,
}) => {
  const {
    userId,
    name,
    views,
    title,
    body,
    isMyPost,
    profileImageUrl,
    comments,
  } = item;

  return (
    <Card containerStyle={styles.cardContainer}>
      <PostHeader
        userId={`${userId}`}
        name={name}
        views={views}
        profileImageUrl={profileImageUrl}
      />
      <Card.FeaturedTitle style={styles.title}>{title}</Card.FeaturedTitle>
      <Card.FeaturedSubtitle style={styles.subTitle}>
        {body}
      </Card.FeaturedSubtitle>
      {!isMyPost && (
        <View style={[styles.userInfocontainer, styles.spaceContainer]}>
          <Waves
            waves={userSentWaves}
            waveCount={waves}
            commentsCount={comments.length}
            onPress={() => sentWaves(item)}
          />
          <Saved
            hasSaved={hasSaved}
            onPress={() => {
              hasSaved ? onPressUnSave(item) : onPressSave(item);
            }}
          />
        </View>
      )}
    </Card>
  );
};

Post.propTypes = {
  item: PropTypes.object,
  onPressSave: PropTypes.func,
  onPressUnSave: PropTypes.func,
  sentWaves: PropTypes.func,
  waves: PropTypes.number,
  hasSaved: PropTypes.bool,
  userSentWaves: PropTypes.bool,
};

Post.defaultProps = {
  onPressSave: _noop,
  onPressUnSave: _noop,
  waves: 0,
  hasSaved: false,
  userSentWaves: false,
};
export default React.memo(Post);
