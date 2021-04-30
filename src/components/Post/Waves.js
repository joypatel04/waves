import React from 'react';
import {View, TouchableWithoutFeedback, Image} from 'react-native';
import {Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import {wave} from '../../assets/images';
import styles from './styles';

const Waves = ({waves, onPress, waveCount}) => (
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
  </View>
);

Waves.proptypes = {
  onPress: PropTypes.func,
  waves: PropTypes.bool,
  waveCount: PropTypes.number,
};

export default React.memo(Waves);
