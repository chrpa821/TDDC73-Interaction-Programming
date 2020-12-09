import React from 'react'
import { Text, FlatList, Pressable } from 'react-native'
import { gql, useQuery } from '@apollo/client'

//import styles from './styles'

import {
    StyleSheet,
    View,
  } from 'react-native';

const REPO_QUERY = gql`
  query{
    search(type: REPOSITORY, first: 20, query: "language: any") {
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

    return data.search.nodes.map(({ name, stargazerCount, id }) => (
        <View key={name}>
            <Text>
                {name}: {stargazerCount}
            </Text>
        </View>
    ));
}

export default () => {

    return (
        Repos()
      );
  }