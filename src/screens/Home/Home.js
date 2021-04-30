import React, {useState, useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {View} from 'react-native';

const Home = ({count, asyncIncrement, increment, resetCount}) => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <View>
        <View />
      </View>
    </>
  );
};

export default Home;
