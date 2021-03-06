import React from 'react'
import { Text} from 'react-native'
import { gql, useQuery } from '@apollo/client'

import { useNavigation } from '@react-navigation/native';

import styles from './styles'

import {
    View,
    TouchableHighlight,
    ScrollView,
  } from 'react-native';

const REPO_QUERY = gql`
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

function Repos() {
    const { loading, error, data } = useQuery(REPO_QUERY);

    if (loading) return <Text>Loading....</Text>
    if (error) return <Text>Error :(</Text>

    const navigation = useNavigation();

    return data.search.nodes.map(({ name, stargazerCount, description}) => (
      <TouchableHighlight onPress={() => navigation.navigate('Info')} key={name} style={styles.button}>
        <View >
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.stars}>Stars: {stargazerCount}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableHighlight>
    ));
}

export default ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      {Repos()}
    </ScrollView>
  );

  }