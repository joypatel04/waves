import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const EmptyList = ({title}) => (
  <View style={styles.emptyListContainer}>
    <Text h4>{title}</Text>
  </View>
);

EmptyList.proptypes = {
  title: PropTypes.string,
};

EmptyList.defaultProps = {
  title: 'Bookmarked posts will show up here',
};
export default EmptyList;
