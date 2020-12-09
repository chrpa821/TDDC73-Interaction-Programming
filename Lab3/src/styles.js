import { StyleSheet } from 'react-native'

export const GRAY = '#4d4d4d'

export const screenOptions = {
  headerStyle: {
    backgroundColor: GRAY,
  },
  headerTintColor: '#fff',
}

export default StyleSheet.create({
  container: {
    backgroundColor: '#292929',
  },
  button: {
    marginTop: 30,
    width: '95%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#4a4a4a',
    borderRadius: 5,
    padding: 5
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 3,
    color: 'white'
  },
  description: {
    textAlign: 'left',
    padding: 3,
    color: 'white'
  },
  stars: {
    textAlign: 'left',
    padding: 3,
    color: 'white'
  }
})