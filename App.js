/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FirstCard from './src/components/FirstCard';
import SecondCard from './src/components/SecondCard';
import ThirdCard from './src/components/ThirdCard';
import Feeds from './src/components/Feeds';

const App = () => {
  return (
    <ThirdCard/>
  );
};


export default App;
