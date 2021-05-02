import React, {useLayoutEffect, useState} from 'react';
import {KeyboardAvoidingView, View, TextInput, Keyboard} from 'react-native';
import {Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import styles from './styles';

const WritePost = ({navigation, updateMyPost}) => {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');

  useLayoutEffect(() => {
    const onPostPress = () => {
      updateMyPost({title, story});
      setTimeout(() => {
        navigation.goBack();
      }, 0);
    };

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onPostPress} style={styles.postButton}>
          <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, title, story, updateMyPost]);

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.container}>
            <Text style={styles.titleText}>Story Title : </Text>
            <TextInput
              autoFocus
              multiline
              style={styles.inputStyle}
              value={title}
              onChangeText={setTitle}
              maxLength={90}
            />
            <Text style={styles.subTitleText}>Your story : </Text>
            <TextInput
              style={styles.subInputStyle}
              maxLength={500}
              value={story}
              onChangeText={setStory}
              multiline
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

WritePost.propTypes = {
  updateMyPost: PropTypes.func,
  navigation: PropTypes.object,
};

WritePost.defaultProps = {
  updateMyPost: _noop,
};

export default WritePost;
