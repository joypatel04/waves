import React from 'react';
import {ListItem, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import _noop from 'lodash/noop';
import PropTypes from 'prop-types';
import {darkCharcoal} from '../../themes/colors';
import styles from './styles';

const UserListItem = ({
  item: {id, name, email, website},
  onPressEmail,
  onPressWebsite,
}) => (
  <ListItem bottomDivider>
    <Avatar rounded source={{uri: `https://i.pravatar.cc/200?img=${id}`}} />
    <ListItem.Content>
      <ListItem.Title style={styles.username}>{name}</ListItem.Title>
      <ListItem.Subtitle style={styles.email}>{email}</ListItem.Subtitle>
    </ListItem.Content>
    <Icon
      onPress={() => onPressEmail(email)}
      style={styles.icon}
      size={20}
      color={darkCharcoal}
      name="mail-outline"
    />
    <Icon
      onPress={() => onPressWebsite(website)}
      style={styles.icon}
      size={20}
      color={darkCharcoal}
      name="globe-outline"
    />
  </ListItem>
);

UserListItem.proptypes = {
  onPressEmail: PropTypes.func,
  onPressWebsite: PropTypes.func,
  item: PropTypes.object,
};

UserListItem.defaultProps = {
  onPressEmail: _noop,
  onPressWebsite: _noop,
};

export default UserListItem;
