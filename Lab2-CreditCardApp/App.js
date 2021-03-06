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
const amexImage = require('./images/amex.png');
const mastercardImage = require('./images/mastercard.png');
const troyImage = require('./images/troy.png');
const discoverImage = require('./images/discover.png');


const App = () => {

  const [number, setNumber] = useState('')
  const [name, setName] = useState('FULL NAME')
  const [month, setMonth] = useState('MM')
  const [year, setYear] = useState('YY')
  const [isFlipped, setIsFlipped] = useState(true)
  const [cvv, setCVV] = useState('')
  const [type, setType] = useState('visa')

  const cardType = () => {
    var _number = number;
    let re = new RegExp("^4");
    if (_number.match(re) != null){
      setType("visa");
      return;
    } 

    re = new RegExp("^(34|37)");
    if(_number.match(re) != null){
      setType("amex");
      return;
    } 

    re = new RegExp("^5[1-5]");
    if (_number.match(re) != null){
      setType("mastercard");
      return;
    } 

    re = new RegExp("^6011");
    if (_number.match(re) != null){
      setType("discover");
      return;
    } 
    
    re = new RegExp('^9792')
    if (_number.match(re) != null){
      setType('troy');
      return;
    } 

    //default
    setType('visa');
  }

  const changeNumber = (input) => {
    var temp = input;
    var newText = temp.replace(/[^0-9]/g, '')

    cardType();
    
    setNumber(newText);
  }

  const displayNumber = () => {
    var newText = number;

    for(var i = 0; i < 16 - number.length; i++){
      newText += '#';
    }

    if (type != 'amex') {
      newText = newText.match(new RegExp('.{1,4}', 'g')).join('  ');
    }
    else {
      newText = newText.substring(0,4) + '  ' + newText.substring(4,10) + '  ' + newText.substring(10,15);
      
      return newText;
    }
      
    return(newText);
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

  const flip = () => {
    setIsFlipped(!isFlipped);
  } 

  const changeCVV = (input) => {
    var temp = input.split(' ').join('');
    var newText = temp.replace(/[^0-9]/g, '')

    setCVV(newText);
  }

  const displayCVV = () => {
    var text = '';

    for(var i = 0; i < cvv.length; i++){
      text += '*';
    }
    return (text);
  }

  const displayNetwork = () => {
    if(type == 'visa') return <Image source={visaImage} style={styles.network}  />;
    if(type == 'amex') return <Image source={amexImage} style={styles.network}  />;
    if(type == 'mastercard') return <Image source={mastercardImage} style={styles.network}  />;
    if(type == 'discover') return <Image source={discoverImage} style={styles.network}  />;
    if(type == 'troy') return <Image source={troyImage} style={styles.network}  />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {isFlipped ?
        <ImageBackground source={cardImage} style={styles.card} >
          <View style={styles.rows}>
            <Image source={chipImage} style={styles.chip} />
            {displayNetwork()}
          </View>
          <View style={styles.rows}>
            <Text style={styles.cardNumber}>
              {displayNumber()}
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
        :
        <ImageBackground source={cardImage} style={styles.card} >
          <View style={styles.rows}>
            <View style={styles.backRow1}/>
          </View>
          <View style={styles.backrow2}>
            <Text style={{alignSelf:"flex-end", marginRight:22, color: "#FFFFFF", marginBottom:2, fontSize: 12}}>CVV</Text>
            <TextInput style={styles.cvvBackInput} value={displayCVV()} textAlign="right"/>
          </View>
          <View style={styles.backrow2}>
            <Image source={visaImage} style={styles.networkBack} />
          </View>
        </ImageBackground>
        }
        <View style={styles.form}>
          <View style={styles.firstContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.smallText}>
                Card Number
              </Text>
              <TextInput style={styles.inputTextBox} 
                        keyboardType = 'number-pad' 
                        onChangeText ={(input) => changeNumber(input)} 
                        maxLength = {16} 
                        value = {number}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.smallText}>
                Card Holder
              </Text>
              <TextInput style={styles.inputTextBox} 
                        onChangeText ={(input) => changeName(input)}
                        maxLength = {22} />
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
                  <Picker style={styles.smallMenu} mode="dropdown" onValueChange={(itemValue) => changeYear(itemValue)} >
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
                <TextInput style={styles.cvvInput} 
                            onFocus={() => flip()} 
                            onBlur={() => flip()} 
                            maxLength={4}
                            onChangeText ={(input) => changeCVV(input)}
                            value = {cvv}/>
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
    width: 300,
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
  backRow1:{
    backgroundColor: "#000000",
    width: '100%',
    height: 35,
    opacity: 0.8,
    marginTop: 20,
  },
  backRow2:{
    flexDirection: "column",
  },
  cvvBackInput:{
    backgroundColor: "#FFFFFF",
    alignSelf:"center",
    width: '90%',
    height: 40,
    borderRadius: 4,
  },
  networkBack:{
    opacity:0.7,
    width: 60, 
    height: 60, 
    resizeMode: "contain",
    alignSelf:"flex-end",
    marginRight:16,
  }

});

export default App;
