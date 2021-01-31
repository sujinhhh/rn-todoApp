import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image} from 'react-native';

import Home from '../screens/Home';
import Todos from '../screens/Todos';
import WordsGame from '../screens/WordsGame';

import Entypo from 'react-native-vector-icons/Entypo';
import AndDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import profileIcon from '../assets/images/jin.png';
import Game from '../screens/Game';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Todos'}
        component={Todos}
        options={{
          tabBarIcon: ({color}) => (
            <AndDesign name={'search1'} size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'Game'}
        component={Game}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'message-minus-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Inbox'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'person-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Home}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={profileIcon}
              style={{height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
