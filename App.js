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

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

import feed from './assets/data/feed';

const post1 = feed[0];

// import { withAuthenticator } from 'aws-amplify-react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <Post post={post1} />
        <Post />
        <Post />
      </SafeAreaView>
    </>
  );
};

export default App
