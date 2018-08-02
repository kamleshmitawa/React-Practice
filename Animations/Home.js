import React from 'react'
import {TouchableOpacity,StyleSheet, Text} from 'react-native'
import {Actions} from 'react-native-router-flux'

const Home = () => {
  const goToAbout = () => {
    Actions.about()
  }
  return (
    <TouchableOpacity>
      <Text>This is Home !</Text>
      <Text onPress={goToAbout} style={styles.go}>Go to About page </Text>
    </TouchableOpacity>
  )
}

export default Home


const styles = StyleSheet.create ({
  go: {
    
    backgroundColor : 'blue',
    padding: 10,
    margin: 30,
  },
})
