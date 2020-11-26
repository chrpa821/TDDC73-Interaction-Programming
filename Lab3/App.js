import React from 'react';
import { useQuery, gql } from '@apollo/client';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';



const EXCHANGE_RATES = gql`
query GetExchangeRates {
  rates(currency: "USD") {
    currency
    rate
  }
}
`;

function ExchangeRates() {
const { loading, error, data } = useQuery(EXCHANGE_RATES);

if (loading) return <Text>Loading...</Text>
if (error) return <Text>Error :(</Text>

return data.rates.map(({ currency, rate }) => (
  <View key={currency}>
    <Text>
      {currency}: {rate}
    </Text>
  </View>
));
}

const App = () => {

  return (
    <SafeAreaView>
      {ExchangeRates()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;

