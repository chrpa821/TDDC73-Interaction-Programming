import React from 'react'
import { Text, FlatList, Pressable } from 'react-native'
import { gql, useQuery } from '@apollo/client'

import styles from './styles'


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

export default () => {

    return (
        <SafeAreaView>
          {Repos()}
        </SafeAreaView>
      );
  }