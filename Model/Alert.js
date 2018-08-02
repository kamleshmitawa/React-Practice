import React from 'react'
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native'

const Alerts = () => {
  const showalert = () => {
    Alert.alert('this is Alert Component')
  }
  return (
    <View style={styles.alert}>
    <TouchableOpacity
      onPress= {showalert}>
      <Text> alert </Text>

    </TouchableOpacity>
  </View>
  )
}

export default Alerts
const styles = StyleSheet.create({
alert:{
  backgroundColor: 'cyan',
  marginTop: 100,
  alignItems: 'center',
  padding: 20,
  borderRadius: 20,
  borderWidth: 2,

},
})
