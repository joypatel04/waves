import React, {useState, useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {View, SafeAreaView} from 'react-native';
import {Post} from '../../components';

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
    <SafeAreaView>
      <Post />
    </SafeAreaView>
  );
};

export default Home;
