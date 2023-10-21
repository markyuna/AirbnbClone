/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, View, } from 'react-native';

import Router from './src/navigation/Router';

import GuestsScreen from './src/screens/Guests';
import HomeScreen from './src/screens/Home';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import Post from './src/components/Post';

import feed from './assets/data/feed';

const post1 = feed[0];
const post2 = feed[2];

// import { withAuthenticator } from 'aws-amplify-react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App
