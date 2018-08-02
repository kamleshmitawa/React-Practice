import React from 'react'
import {View, WebView, StyleSheet} from 'react-native'

const webview = () => {
  return (
    <View style={styles.container}>
      <WebView source= {{uri:'https://facebook.github.io/react-native/docs/text.html'}}>
      </WebView>
    </View>
  )
}

export default webview

const styles = StyleSheet.create({
   container: {
      height: 250,
      flex: 1,
      justifyContent: 'space-around',
      margin: 10,
   }
})
