import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//screens
import {HomeScreen} from '../screens/Home';
import {Blank} from '../screens/Blank';

//color
import {color} from '../utils/color';
const tabArray = [
  {
    name: 'Home',
    icon: 'home',
  },
  {
    name: 'Orders',
    icon: 'reorder-horizontal',
  },
  {
    name: 'Chat',
    icon: 'chat-processing',
  },
  {
    name: 'Inbox',
    icon: 'email',
  },
  {
    name: 'Account',
    icon: 'account',
  },
];
const HomeTab = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: color.green,
      }}>
      {tabArray.map((item, index) => (
        <Screen
          key={index}
          name={item.name}
          component={item.name == 'Home' ? HomeScreen : Blank}
          options={{
            tabBarLabel: item.name,
            tabBarIcon: ({color, size}) => (
              <Icon name={item.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Navigator>
  );
};
export const Root = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Root"
          component={HomeTab}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
};
