import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import Explore from '../screens/Explore';
import Reservations from '../screens/Reservations';
import Rewards from '../screens/Rewards';
import Profile from '../screens/Profile';
import Create from '../screens/Create';
import LogIn from '../screens/LogIn';

const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#3bff86',
        tabBarInactiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#242323',
        tabBarInactiveBackgroundColor: '#242323',
      }}>
      <BottomTab.Screen
        component={Explore}
        name="Explore"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        component={Create}
        name="Create"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="feather" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        component={Reservations}
        name="Reservations"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="emoji-happy" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        component={Rewards}
        name="Rewards"
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="gift" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        component={LogIn}
        name="LogIn"
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="user" size={25} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;
