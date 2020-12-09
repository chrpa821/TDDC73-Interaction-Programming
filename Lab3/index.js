import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import MyApp from './App'
import { HttpLink } from 'apollo-link-http';

//2583114f75ebeb6b0f296bd7c384c0a903f18874

// create an apollo link instance, a network interface for apollo client
const link = new HttpLink({
  uri: `https://api.github.com/graphql`,
  headers: {
    Authorization: `Bearer 2583114f75ebeb6b0f296bd7c384c0a903f18874`
  }
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <MyApp/>
  </ApolloProvider>
);

AppRegistry.registerComponent('Lab3', () => App);
