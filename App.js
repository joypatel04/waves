import 'react-native-gesture-handler';
import React from 'react';
import {Platform} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import store from './store';
import {Home, Login} from './screens';

const Stack = createStackNavigator();

export default function App() {
  const stateHandler = (state) => {
    console.log('onStateChange: STATE:', state);
  };

  const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

  const linking = {
    prefixes: [prefix],
  };

  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
          <NavigationContainer onStateChange={stateHandler} linking={linking}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
    </>
  );
}
