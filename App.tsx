/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {ApolloProvider} from '@apollo/client';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GraphQLClient from './src/GraphQLClient';
import {Home} from './src/Screens/Home';

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={GraphQLClient.getClient()}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
