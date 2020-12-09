import React from 'react';
import { useQuery, gql } from '@apollo/client';

import HomeScreen from './src/HomeScreen'

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const REPO_QUERY = gql`
  query{
    search(type: REPOSITORY, first: 10, query: "language: any") {
      nodes {
        ... on Repository {
          name
          stargazerCount
          id
        }
      }
    }
  }
`;

function Repos() {
const { loading, error, data } = useQuery(REPO_QUERY);

if (loading) return <Text>Loading...</Text>
if (error) return <Text>Error :(</Text>

return data.search.nodes.map(({ name, stargazerCount }) => (
  <View key={name}>
    <Text>
      {name}: {stargazerCount}
    </Text>
  </View>
));
}

const App = () => {

  return (
    <SafeAreaView>
      {Repos()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;

