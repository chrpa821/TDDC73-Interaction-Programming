/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

const App = () => {
  return (
   <View style={styles.container}>
       <View style={styles.image}>
       <Image
         source={require('./img/splash.png')} 
         style={{width: 180, height: 180}}
       />
     </View>
     <View style = {styles.buttons}>
       <Button
           title="Button"
           onPress={() => Alert.alert('button pressed')}/>
       <Button
           title="Button"
           onPress={() => Alert.alert('button pressed')}/>
       <Button
           title="Button"
           onPress={() => Alert.alert('button pressed')}/>
       <Button
           title="Button"
           onPress={() => Alert.alert('button pressed')}/>
     </View>
     <View style={styles.email}>
          <Text>Email</Text>
          <TextInput style = {styles.emailInput}
            autoCompleteType = "email"
            onChangeText={text => onChangeText(text)}
          />
     </View>
   </View>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    marginTop: 20,
    flex: 1,
    justifyContent: "space-between",
    alignContent:"space-around",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  email: {
    marginTop: 60,
    flex: 5,
    flexDirection: "row",
    justifyContent:"space-around",
  },
  emailInput: {
    alignSelf:"flex-start",
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: 150,
    marginRight: 70,
  },
});

export default App;
