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
      <View style={styles.form}>
        <View style={styles.firstContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.smallText}>
              Card Number
            </Text>
            <TextInput style={styles.inputTextBox}/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.smallText}>
              Card Holder
            </Text>
            <TextInput style={styles.inputTextBox}/>
          </View>
          <View style={styles.inputLastRow}>
            <View style= {{width:"66%"}}>
              <Text style={styles.smallText}>
                Expiration Date
              </Text>
              <View style = {{ flexDirection: "row"}}>
                <TextInput style={styles.smallMenu}/>
                <TextInput style={styles.smallMenu}/>
              </View>
            </View>
            <View style= {{width:"20%"}}>
              <Text style={styles.smallText}>
                CVV
              </Text>
              <TextInput style={styles.cvvInput}/>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Button
              title="Submit"
            />
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
    borderRadius: 15,
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
    fontSize: 12,
    color: "#D3D3D3",
  },
  fullName: {
    fontSize: 14,
    color: Colors.white,
  },
  cardExpire:{
    marginRight: 16,
  },
  expires:{
    fontSize: 12,
    color: "#D3D3D3",
  },
  mmyy:{
    fontSize: 14,
    color: Colors.white,
  },
  form: {
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
  firstContainer:{
    paddingTop: 100,
  },
  inputContainer: {
    margin: 16,
  },
  smallText:{
    fontSize: 12,
  },
  inputTextBox:{
    marginTop: 5,
    borderColor: '#DCDCDC', 
    borderWidth: 1,
    borderRadius: 5,
  },
  inputLastRow:{
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallMenu:{
    marginTop: 5,
    borderColor: '#DCDCDC', 
    borderWidth: 1,
    borderRadius: 5,
    width: "45%",
    marginRight: 16,
  },
  cvvInput:{
    marginTop: 5,
    borderColor: '#DCDCDC', 
    borderWidth: 1,
    borderRadius: 5,
    width:"100%",  
  },

});

export default App;
