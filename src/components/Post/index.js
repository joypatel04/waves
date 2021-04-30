import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import Waves from './Waves';
import Saved from './Saved';
import styles from './styles';

const Post = ({item, hasSaved}) => {
  const [waves, setWaves] = useState(false);
  const [waveCount, setWaveCount] = useState(item.waves);

  const onWavedPress = useCallback(() => {
    if (!waves) {
      setWaves(true);
    }
    setWaveCount(waveCount + 1);
  }, [waves, waveCount, setWaves, setWaveCount]);

  return (
    <Card>
      <PostHeader userId={item.userId} name={item.name} views={item.views} />
      <Card.FeaturedTitle style={styles.title}>{item.title}</Card.FeaturedTitle>
      <Card.FeaturedSubtitle style={styles.subTitle}>
        {item.body}
      </Card.FeaturedSubtitle>
      <View style={[styles.userInfocontainer, styles.spaceContainer]}>
        <Waves waves={waves} waveCount={waveCount} onPress={onWavedPress} />
        <Saved hasSaved={hasSaved} />
      </View>
    </Card>
  );
};

Post.proptypes = {
  item: PropTypes.object,
};

export default Post;
