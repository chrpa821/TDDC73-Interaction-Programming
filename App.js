import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  TextInput,
  ImageBackground,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
   <View style={styles.container}>
      <ImageBackground source={require('./images/2.jpeg')} style={styles.card} >
        <View style={styles.rows}>
          <Image source={require('./images/chip.png')} style={styles.chip} />
          <Image source={require('./images/visa.png')} style={styles.network}  />
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
    flex: 1,
    marginTop: 20,
    marginHorizontal:20,
    width: null,
    height: null,
    resizeMode: 'contain',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
    flex: 2,
    backgroundColor: Colors.white,
  },
});

export default App;
