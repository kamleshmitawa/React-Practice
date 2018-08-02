import React, { Component } from 'react'
import {
   View,
   StyleSheet,
}
from 'react-native'
import SwitchExample from './SwitchExample'

export default class Switch extends Component {
   constructor() {
      super();
      this.state = {
         switchValue: false,

      }
   }
   toggleSwitch1 = (value) => {
      this.setState({switch1Value: value})
      console.log('Login: ' + value)
   }

   render() {
      return (
         <View >
            <SwitchExample
               toggleSwitch1 = {this.toggleSwitch1}
               switchValue = {this.state.switch1Value}
               />
         </View>
      );
   }
}
