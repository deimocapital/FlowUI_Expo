import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SafeAreaView, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import RentalSpecs from '../screens/RentalSpecs';
import Explore from '../screens/Explore';

const Stack = createStackNavigator();

const Header = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <TextInput />
    </View>
  );
};

const RentalSpecsStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          header: () => <Header />,
        }}>
        <Stack.Screen
          component={Explore}
          name="ExploreScreen"
          options={{title: 'Explore'}}
        />
        <Stack.Screen component={RentalSpecs} name="RentalSpecs" />
      </Stack.Navigator>
  );
};

export default RentalSpecsStack;
