import React, {useState} from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {Card, Avatar, Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import {waves} from '../../assets/images';
import styles from './styles';

const Post = ({item}) => {
  const [waved, setWaved] = useState(false);
  const [waveCount, setWaveCount] = useState(item.waves);
  return (
    <Card>
      <View style={styles.userInfocontainer}>
        <Avatar
          size="medium"
          rounded
          source={{
            uri: `https://i.pravatar.cc/200?img=${item.userId}`,
          }}
        />
        <View style={styles.nameContainer}>
          <Text h4 style={styles.name}>
            {item.name}
          </Text>
          <Text h5 style={styles.views}>
            {item.views}
          </Text>
        </View>
      </View>
      <Card.FeaturedTitle style={styles.title}>{item.title}</Card.FeaturedTitle>
      <Card.FeaturedSubtitle style={styles.subTitle}>
        {item.body}
      </Card.FeaturedSubtitle>
      <View style={styles.userInfocontainer}>
        <View style={styles.wavesContainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              if (!waved) {
                setWaved(true);
              }

              setWaveCount(waveCount + 1);
            }}>
            <Image
              style={[styles.wavesImage, waved && styles.wavedColor]}
              source={waves}
            />
          </TouchableWithoutFeedback>
          <Text h5 style={styles.wavesCount}>
            {waveCount}
          </Text>
        </View>
      </View>
    </Card>
  );
};

Post.proptypes = {
  item: PropTypes.object,
};

export default Post;
