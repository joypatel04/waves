import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const EmptyList = ({title, subTitle, hasButton, onPress, containerStyle}) => (
  <View style={[styles.container, containerStyle]}>
    <Text style={styles.title}>{title}</Text>
    {subTitle.length > 0 && <Text style={styles.subTitle}>{subTitle}</Text>}
    {hasButton && (
      <Button
        onPress={onPress}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Posts worth saving"
      />
    )}
  </View>
);

EmptyList.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  hasButton: PropTypes.bool,
  containerStyle: PropTypes.object,
  onPress: PropTypes.func,
};

EmptyList.defaultProps = {
  title: "You haven't saved anything yet.",
  subTitle: '',
  hasButton: false,
  containerStyle: {},
};
export default EmptyList;
