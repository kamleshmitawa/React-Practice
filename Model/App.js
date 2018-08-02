import React from 'react';
import { StyleSheet,View } from 'react-native';
import Modal from './Model'
import ActivityIndicator from './ActivityIndicator'
import Switch from './Switch'
import Alerts from './Alert'
//import Inputs from './CameraExample'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Alerts />
      
        <Switch />
      <Modal />
      <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
    //marginTop: 50,
  },


});
