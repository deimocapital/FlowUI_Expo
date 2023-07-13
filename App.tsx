import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Router from './src/router';
import FetchFirebase from './src/components/FetchFirebase';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  //isDarkMode ? Colors.darker : Colors.lighter
  const backgroundStyle = {
    backgroundColor: '#242323',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Router />
    </SafeAreaView>
  );
}

export default App;