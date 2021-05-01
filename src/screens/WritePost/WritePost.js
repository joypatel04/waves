import React, {useLayoutEffect, useState} from 'react';
import {KeyboardAvoidingView, View, TextInput, Keyboard} from 'react-native';
import {Text} from 'react-native-elements';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import styles from './styles';

const WritePost = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {}} style={styles.postButton}>
          <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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

export default WritePost;
