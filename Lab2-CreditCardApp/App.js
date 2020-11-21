import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import {Picker} from '@react-native-picker/picker';

const cardImage = require('./images/2.jpeg');
const chipImage = require('./images/chip.png');
const visaImage = require('./images/visa.png');


const App = () => {

  const [number, setNumber] = useState('####  ####  ####  ####')
  const [name, setName] = useState('FULL NAME')
  const [month, setMonth] = useState('MM')
  const [year, setYear] = useState('YY')

  const changeNumber = (input) => {

    input.replace(/[^0-9]/g, '')
    let formattedText = input.split(' ').join('');
    
    for(var i = 0; i < 16 - input.length; i++){
      formattedText += '#';
    }
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join('  ');
    }

    setNumber(formattedText);
  }

  const changeName = (input) => {
    var text = input.toUpperCase();
    setName(text);
  }

  const changeMonth = (input) => {
    setMonth(input);
  }

  const changeYear = (input) => {
    setYear(input);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
          <ImageBackground source={cardImage} style={styles.card} >
            <View style={styles.rows}>
              <Image source={chipImage} style={styles.chip} />
              <Image source={visaImage} style={styles.network}  />
            </View>
            <View style={styles.rows}>
              <Text style={styles.cardNumber}>
                {number}
              </Text>
            </View>
            <View style={styles.rows}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardHolder}>
                  Card Holder
                </Text>
                <Text style={styles.fullName}>
                  {name}
                </Text>
              </View>
              <View style={styles.cardExpire}>
                <Text style={styles.expires}>
                  Expires
                </Text>
                <Text style={styles.mmyy}>
                  {month}/{year}
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
                <TextInput style={styles.inputTextBox} keyboardType = 'number-pad' onChangeText ={(input) => changeNumber(input)} maxLength={16}/>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.smallText}>
                  Card Holder
                </Text>
                <TextInput style={styles.inputTextBox} onChangeText ={(input) => changeName(input)}/>
              </View>
              <View style={styles.inputLastRow}>
                <View style= {{width:"66%"}}>
                  <Text style={styles.smallText}>
                    Expiration Date
                  </Text>
                  <View style = {{ flexDirection: "row"}}>
                    <Picker style={styles.smallMenu} mode="dropdown" onValueChange={(itemValue) => changeMonth(itemValue)}>
                      <Picker.Item label="01" value="01" />
                      <Picker.Item label="02" value="02" />
                      <Picker.Item label="03" value="03" />
                      <Picker.Item label="04" value="04" />
                      <Picker.Item label="05" value="05" />
                      <Picker.Item label="06" value="06" />
                      <Picker.Item label="07" value="07" />
                      <Picker.Item label="08" value="08" />
                      <Picker.Item label="09" value="09" />
                      <Picker.Item label="10" value="10" />
                      <Picker.Item label="11" value="11" />
                      <Picker.Item label="12" value="12" />
                    </Picker>
                    <Picker style={styles.smallMenu} mode="dropdown"onValueChange={(itemValue) => changeYear(itemValue)} >
                      <Picker.Item label="2020" value="20" />
                      <Picker.Item label="2021" value="21" />
                      <Picker.Item label="2022" value="22" />
                      <Picker.Item label="2023" value="23" />
                      <Picker.Item label="2024" value="24" />
                      <Picker.Item label="2025" value="25" />
                      <Picker.Item label="2026" value="26" />
                      <Picker.Item label="2027" value="27" />
                      <Picker.Item label="2028" value="28" />
                    </Picker>
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
   </ScrollView>
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
    top:-8

  },
  network: {
    width: 60, 
    height: 60, 
    resizeMode: "contain", 
    margin: 16,
    top:-12
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
    width: "55%",
    paddingRight: 16,
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
