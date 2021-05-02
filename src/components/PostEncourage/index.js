import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-elements';
import _noop from 'lodash/noop';
import PropTypes from 'prop-types';

import styles from './styles';

const PostEncourage = ({hasMyPost, onPress}) => (
  <>
    {hasMyPost ? (
      <TouchableOpacity onPress={onPress} style={styles.newPostButton}>
        <Text style={styles.newPostButtonText}>New Wave</Text>
      </TouchableOpacity>
    ) : (
      <View style={styles.container}>
        <Text style={styles.title}>Write your first story</Text>
        <Text style={styles.subTitle}>
          {"We'd love to hear what you'r thinking"}
        </Text>
        <Button
          onPress={onPress}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          title="Get started"
        />
      </View>
    )}
  </>
);

PostEncourage.propTypes = {
  onPress: PropTypes.func,
  hasMyPost: PropTypes.bool,
};

PostEncourage.defaultProps = {
  onPress: _noop,
  hasMyPost: false,
};
export default PostEncourage;
