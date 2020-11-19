import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  ImageBackground,
  Menu
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const cardImage = require('./images/2.jpeg');
const chipImage = require('./images/chip.png');
const visaImage = require('./images/visa.png');

const cardRatio = window.width

const App = () => {
  return (
   <View style={styles.container}>
      <ImageBackground source={cardImage} style={styles.card} >
        <View style={styles.rows}>
          <Image source={chipImage} style={styles.chip} />
          <Image source={visaImage} style={styles.network}  />
        </View>
        <View style={styles.rows}>
          <Text style={styles.cardNumber}>
            ####   ####   ####   ####
          </Text>
        </View>
        <View style={styles.rows}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardHolder}>
              Card Holder
            </Text>
            <Text style={styles.fullName}>
              FULL NAME
            </Text>
          </View>
          <View style={styles.cardExpire}>
            <Text style={styles.expires}>
              Expires
            </Text>
            <Text style={styles.mmyy}>
              MM/YY
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.input}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>
            Card Number
          </Text>
          <TextInput style={styles.inputTextBox}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>
            Card Holder
          </Text>
          <TextInput style={styles.inputTextBox}/>
        </View>
        <View style={styles.inputLastRow}>
          <View>
            <Text style={styles.inputText}>
              Expiration Date
            </Text>
            <TextInput style={styles.inputTextBox}/>
          </View>
          <View>
            <TextInput style={{fontSize: 12, marginTop: 12}}/>
          </View>
          <View>
            <Text style={styles.inputText}>
              CVV
            </Text>
            <TextInput style={styles.inputTextBox}/>
          </View>
        </View>
      </View>
   </View>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddeefc",
  },
  card: {
    alignSelf: "center",
    marginTop: 20,
    marginHorizontal:20,
    width: null,
    height: null,
    aspectRatio: 675/435,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
    justifyContent: "space-between",
  },
  chip: {
    width: 50, 
    height: 50, 
    resizeMode: "contain", 
    margin: 16,
  },
  network: {
    width: 60, 
    height: 60, 
    resizeMode: "contain", 
    margin: 16,
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
    marginLeft: 30,
    marginBottom: 20,
  },
  cardInfo: {
    marginLeft: 16,
    marginBottom: 16,
  },
  cardHolder: {
    fontSize: 16,
    color: "#D3D3D3",
  },
  fullName: {
    fontSize: 16,
    color: Colors.white,
  },
  cardExpire:{
    marginRight: 16,
  },
  expires:{
    fontSize: 16,
    color: "#D3D3D3",
  },
  mmyy:{
    fontSize: 16,
    color: Colors.white,
  },
  input: {
    elevation: -1,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
    margin: 16,
    top: -100,
  },
  inputContainer: {
    top:100,
    margin: 16,
  },
  inputText:{
    fontSize: 12,
  },
  inputTextBox:{
    marginTop: 5,
    height: 60, 
    borderColor: '#DCDCDC', 
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  inputLastRow:{
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-between",

  },
});

export default App;
