import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import _noop from 'lodash/noop';
import PropTypes from 'prop-types';
import styles from './styles';

const PostEncourage = ({onPress}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Write your first story</Text>
    <Text style={styles.subTitle}>We'd love to hear what you'r thinking</Text>
    <Button
      onPress={onPress}
      buttonStyle={styles.button}
      titleStyle={styles.buttonText}
      title="Get started"
    />
  </View>
);

PostEncourage.proptypes = {
  onPress: PropTypes.func,
};

PostEncourage.defaultProps = {
  onPress: _noop,
};
export default PostEncourage;
