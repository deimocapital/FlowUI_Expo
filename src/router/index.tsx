import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNav from './bottomTabNav';

import Explore from '../screens/Explore';
import RentalSpecs from '../screens/RentalSpecs';
import { UserContext } from '../context/UserContext';


const Root = createStackNavigator();

const Router = () => {
  const [user, setUser] = useState('');

  // console.log('Router ' + user);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
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
    </UserContext.Provider>  
  );
};

export default Router;
