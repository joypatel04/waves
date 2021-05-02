import React from 'react';
import {Platform} from 'react-native';
import PropTypes from 'prop-types';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ThemeProvider} from 'react-native-elements';

import {Home, Profile, Saved, WritePost, Following} from '../screens';
import {primaryColor, secondaryColor} from '../themes/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryColor,
    background: secondaryColor,
  },
};

const Tabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Saved') {
          iconName = focused ? 'bookmark' : 'bookmark-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person-circle' : 'person-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Saved" component={Saved} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

Tabs.propTypes = {
  focused: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default function Navigation() {
  const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

  const linking = {
    prefixes: [prefix],
  };

  return (
    <NavigationContainer theme={MyTheme} linking={linking}>
      <ThemeProvider>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen
            options={{headerShown: false}}
            name="Tabs"
            component={Tabs}
          />
          <Stack.Screen
            options={{
              headerBackTitleVisible: false,
              headerTitle: 'Write your story',
            }}
            name="WritePost"
            component={WritePost}
          />
          <Stack.Screen
            options={{headerBackTitleVisible: false}}
            name="Following"
            component={Following}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
