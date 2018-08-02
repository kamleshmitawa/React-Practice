import React, { Component } from 'react';
import { AppRegistry, Text,StyleSheet, View } from 'react-native';
import Size from './dimension';
import ScrollViewExample from './ScrollView';
import Photo from './Imageexample';
import Btn from './Button';

class Home extends Component {
  render(){
    return (
      <View style={styles.content}>
        <Size />
        <Btn />
      <Photo />
        <ScrollViewExample />

      </View>

    )
  }

}



export default Home;

const styles = StyleSheet.create ({
  content: {
    flex: 1,
    justifyContent: 'spaceAround',
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
