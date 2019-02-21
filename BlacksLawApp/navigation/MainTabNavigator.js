import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

// 1. Home Page (Word of the Day, Search, Most Popular)
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

// 2. Bookmarks: saved entries/words/phrases
const BookmarksStack = createStackNavigator({
  Bookmarks: LinksScreen,
});

BookmarksStack.navigationOptions = {
  tabBarLabel: 'Bookmarks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

// 3. Dictionary: flat list of all words (pre-cached)
const DictionaryStack = createStackNavigator({
  Dictionary: LinksScreen,
});

DictionaryStack.navigationOptions = {
  tabBarLabel: 'Dictionary',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

// 4. Past Search: list of past search history + links to entries
const PastSearchStack = createStackNavigator({
  PastSearch: LinksScreen,
});

PastSearchStack.navigationOptions = {
  tabBarLabel: 'PastSearch',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
    ),
};
  
// 5. Settings: list of all possible app settings
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack, // word of the day
  BookmarksStack,
  DictionaryStack, // search
  PastSearchStack,
  SettingsStack,
});
