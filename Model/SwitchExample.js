import React, { Component } from 'react'
import {
   View,
   Switch,
   StyleSheet,
   Text
}
from 'react-native'

export default SwitchExample = (props) => {
   return (
      <View style = {styles.container}>
        <Text style={styles.txt}> Switch</Text>
         <Switch
            onValueChange = {props.toggleSwitch1}
            value = {props.switchValue}/>

      </View>
   )
}
const styles = StyleSheet.create ({
   container: {
      //flex: 1,
      alignItems: 'center',
      marginTop: 50,
      backgroundColor: 'orange',
      borderWidth: 2,
      borderRadius: 20,
      marginBottom: 10,
   },
   txt:{
margin: 10,
   }

})
