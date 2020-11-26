import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import MyApp from './App'

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <MyApp/>
  </ApolloProvider>
);

AppRegistry.registerComponent('Lab3', () => App);
