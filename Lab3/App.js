import React from 'react';

//navigation stack
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './src/HomeScreen'

import { screenOptions } from './src/styles'

const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Top 20 Trending Repos' }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

