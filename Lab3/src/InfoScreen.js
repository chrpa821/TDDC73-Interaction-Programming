import React from 'react'
import { Text } from 'react-native'
import { gql, useQuery } from '@apollo/client'

import styles from './styles'

import {
    View,
    ScrollView,
  } from 'react-native';

const INFO_QUERY = gql`
  query{
    search(type: REPOSITORY, first: 20, query: "language: any") {
      nodes {
        ... on Repository {
          name
          stargazerCount
          id
          description
        }
      }
    }
  }
`;

function Repo() {
    const { loading, error, data } = useQuery(INFO_QUERY);

    if (loading) return <Text>Loading....</Text>
    if (error) return <Text>Error :(</Text>

    return data.search.nodes.map(({ name, stargazerCount, description}) => (
        <View style={styles.button}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.stars}>Stars: {stargazerCount}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    ));
}

export default ({route}) => {

    return (
      <ScrollView>
        <Text>It works!</Text>
      </ScrollView>
    );
  }