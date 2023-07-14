import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNav from './bottomTabNav';

import Explore from '../screens/Explore';
import RentalSpecs from '../screens/RentalSpecs';

const Root = createStackNavigator();

const Router = () => {
  
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen component={BottomTabNav} name="HomeTabs" />
        <Root.Screen
          component={Explore}
          name="ExploreScreen"
          options={{title: 'Explore'}}
        />
        <Root.Screen component={RentalSpecs} name="RentalSpecs" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
