import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import styles from './styles';
import {lightGrey, primaryColor} from '../../themes/colors';

const Saved = ({hasSaved, onPress}) => (
  <View style={styles.userInfocontainer}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Ionicons
        size={28}
        color={hasSaved ? primaryColor : lightGrey}
        name={hasSaved ? 'bookmark' : 'bookmark-outline'}
      />
    </TouchableWithoutFeedback>
    {/* <TouchableWithoutFeedback onPress={onPress}>
      <Ionicons
        size={28}
        color={hasSaved ? primaryColor : primaryColor}
        name={hasSaved ? 'share' : 'share'}
      />
    </TouchableWithoutFeedback> */}
  </View>
);

Saved.proptypes = {
  onPress: PropTypes.func,
  hasSaved: PropTypes.bool,
};

export default React.memo(Saved);
