import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native'
import Animation from './Animations'
import Routes from './Routes'
import WebView from './WebView'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
        <WebView />
        <Animation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
  //  justifyContent: 'center',
  },
});
