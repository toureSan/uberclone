/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StatusBar, Text} from 'react-native';

import { Node } from 'react';
import HomeScreen from './src/screens/HomeScreen/index'
const App: () => Node = () => {
  
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (

    <HomeScreen/>

  );
};


export default App;
