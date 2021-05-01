import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const EmptyList = ({onPress}) => (
  <View style={styles.container}>
    <Text style={styles.title}>You haven't saved anything yet.</Text>
    <Text style={styles.subTitle}>
      Tap the bookmark icon on posts to save them fot later, even offline
    </Text>
    <Button
      onPress={onPress}
      buttonStyle={styles.button}
      titleStyle={styles.buttonText}
      title="Posts worth saving"
    />
  </View>
);

EmptyList.proptypes = {
  title: PropTypes.string,
};

EmptyList.defaultProps = {
  title: 'Bookmarked posts will show up here',
};
export default EmptyList;
