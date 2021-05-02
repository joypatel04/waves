import React from 'react';
import {View, TouchableWithoutFeedback, Image} from 'react-native';
import {Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import {wave} from '../../assets/images';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {lightGrey} from '../../themes/colors';

const Waves = ({waves, onPress, waveCount, commentsCount}) => (
  <View style={styles.userInfocontainer}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Image
        style={[styles.wavesImage, waves && styles.wavesColor]}
        source={wave}
      />
    </TouchableWithoutFeedback>
    <Text h5 style={styles.wavesCount}>
      {`${waveCount} Waves`}
    </Text>
    <Icon
      style={styles.chatIcon}
      color={lightGrey}
      name="chatbubble-ellipses-outline"
      size={30}
    />
    <Text h5 style={styles.wavesCount}>
      {`${commentsCount} Comments`}
    </Text>
  </View>
);

Waves.proptypes = {
  onPress: PropTypes.func,
  waves: PropTypes.bool,
  waveCount: PropTypes.number,
  commentsCount: PropTypes.number,
};

Waves.defaultProps = {
  commentsCount: 5,
  waveCount: 200,
  onPress: _noop,
  waves: false,
};

export default React.memo(Waves);
