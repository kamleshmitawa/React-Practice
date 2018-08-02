import React from 'react'
import {TouchableOpacity,StyleSheet, Text} from 'react-native'
import {Actions} from 'react-native-router-flux'

const About = () => {
  const goToHome = () => {
    Actions.home()
  }
  return(
    <TouchableOpacity >
      <Text>This is About page!</Text>
    <Text onPress={goToHome} style={styles.text}>Go to Home page</Text>
    </TouchableOpacity>
  )
}

export default About

const styles = StyleSheet .create ({
  text: {
    backgroundColor : 'yellow',
    padding: 10,
    margin: 20,
    justifyContent:'space-around',
  },
})
