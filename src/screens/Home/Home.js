import {useFocusEffect} from '@react-navigation/native';
import React, {useRef, useState, useCallback} from 'react';
import {Text, View} from 'react-native';
import Toast from 'react-native-easy-toast';
import {Button} from 'react-native-elements';

import {Spacer} from '../../components';

const Home = ({count, asyncIncrement, increment, resetCount}) => {
  const toast = useRef();
  const [loading, setLoading] = useState(false);

  useCallback(() => {
    return () => resetCount();
  }, [count]);

  useFocusEffect(() => {});

  const handleIncrement = (e) => {
    increment(1);
    toast.current.show('updated');
  };

  const handleIncrementAsync = async (e) => {
    setLoading(true);
    await asyncIncrement(1);
    toast.current.show('updated async');
    setLoading(false);
  };

  return (
    <>
      <View>
        <Toast position="center" ref={toast} />
        <Spacer y={2} />
        <Text>{count}</Text>
        <Spacer y={2} />
        <Button title="Increment" onPress={handleIncrement} />
        <Spacer y={2} />
        <Button
          loading={loading}
          title="Increment Async"
          onPress={handleIncrementAsync}
        />
      </View>
    </>
  );
};

export default Home;
