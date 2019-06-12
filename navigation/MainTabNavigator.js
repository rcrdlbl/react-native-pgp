import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import EnterTargetKeyScreen from '../screens/EnterTargetKeyScreen'
import EncodingResultScreen from '../screens/EncodingResultScreen'
import HomeScreen from '../screens/HomeScreen';


import EncryptedMessageScreen from '../screens/EncryptedMessageScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EncodeScreen from '../screens/EncodeScreen'

const HomeStack = createStackNavigator({
  Home: EncodeScreen,
  EnterTargetKey: EnterTargetKeyScreen,
  EncodingResult: EncodingResultScreen
},
{
  initialRouteName: 'Home'
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Encode',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-create`
          : 'md-create'
      }
    />
  ),
};

const DecodeStack = createStackNavigator({
  EncryptedMessage: EncryptedMessageScreen,
  DecryptedMessage: DecryptedMessageScreen
},
{
  initalRouteName: 'Decode'
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Decode',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-eye' : 'md-eye'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-key' : 'md-key'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
