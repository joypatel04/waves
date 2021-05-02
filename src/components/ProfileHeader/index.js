import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import _noop from 'lodash/noop';
import PropTypes from 'prop-types';

import styles from './styles';
import {darkCharcoal} from '../../themes/colors';

const profileImage =
  'https://user-images.githubusercontent.com/18585502/116792497-95f11b00-aade-11eb-9819-f6c56b6eff99.png';

const ProfileHeader = ({following, onPressFollowing, onPressActionables}) => (
  <View style={styles.container}>
    <View style={styles.upperContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: profileImage,
          }}
        />
      </View>
      <View style={styles.profileDetails}>
        <View style={styles.statesContainer}>
          <Text style={styles.userName}>0</Text>
          <Text style={styles.userName}>Waves</Text>
        </View>
        <View style={styles.statesContainer}>
          <Text style={styles.userName}>0</Text>
          <Text style={styles.userName}>Followers</Text>
        </View>
        <TouchableOpacity
          onPress={onPressFollowing}
          style={styles.statesContainer}>
          <Text style={styles.userName}>{following}</Text>
          <Text style={styles.userName}>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.userName}>Joy Patel</Text>
      <Text style={styles.bio}>{"Livin'a little ☮️"}</Text>
      <Text style={styles.bio}>
        Application developer/Team lead - @betterhalf.ai
      </Text>
      <Text style={styles.bio}>
        Traveller 🧳 || Coder 🧑🏽‍💻 || Obsessed with Sneakers 👟
      </Text>
    </View>
    <View style={[styles.infoContainer, styles.socialContainer]}>
      <Icon
        onPress={() => onPressActionables({type: 'instagram'})}
        color={darkCharcoal}
        size={26}
        name="logo-instagram"
      />
      <Icon
        onPress={() => onPressActionables({type: 'linkedin'})}
        color={darkCharcoal}
        size={26}
        name="logo-linkedin"
      />
      <Icon
        onPress={() => onPressActionables({type: 'whatsapp'})}
        color={darkCharcoal}
        size={26}
        name="logo-whatsapp"
      />
      <Icon
        onPress={() => onPressActionables({type: 'github'})}
        color={darkCharcoal}
        size={26}
        name="logo-github"
      />
      <Icon
        onPress={() => onPressActionables({type: 'email'})}
        color={darkCharcoal}
        size={28}
        name="mail-outline"
      />
    </View>
  </View>
);

ProfileHeader.propTypes = {
  onPressFollowing: PropTypes.func,
  following: PropTypes.number,
  onPressActionables: PropTypes.func,
};

ProfileHeader.defaultProps = {
  following: 20,
  onPressFollowing: _noop,
  onPressActionables: _noop,
};
export default ProfileHeader;
