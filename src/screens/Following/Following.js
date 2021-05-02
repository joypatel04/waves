import React, {useCallback} from 'react';
import idx from 'idx';
import PropTypes from 'prop-types';
import {SafeAreaView, Linking, Alert, FlatList} from 'react-native';

import {UserListItem} from '../../components';
import {getRequestedUrl} from '../../utils/helpers';

const Following = ({route}) => {
  const onPressActionables = useCallback(async ({type, value}) => {
    const url = getRequestedUrl({type, value});
    console.log('url');
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);
  const users = idx(route, (_) => _.params.following) || [];
  return (
    <SafeAreaView>
      <FlatList
        data={users}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => {
          return (
            <UserListItem
              item={item}
              onPressEmail={(email) =>
                onPressActionables({type: 'email', value: email})
              }
              onPressWebsite={(website) =>
                onPressActionables({type: 'website', value: website})
              }
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

Following.propTypes = {
  route: PropTypes.object,
};

export default Following;
