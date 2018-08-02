import React, {Component} from 'react'
import {View,Text, LayoutAnimation, StyleSheet} from 'react-native'

 class Animation extends Component {
  state = {
    mystyle: {
      height: 100,
      backgroundColor: 'red',

    }
  }
  expandElement = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState( {
      mystyle: {
        height: 300,
        backgroundColor: 'red'
      }
    })
  }
  collapseElement = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.setState( {
      mystyle: {
        height: 100,
        backgroundColor: 'red'
      }
    })
  }
  render(){
    return(
      <View >
        <View  style = {this.state.mystyle}  > </View>
        <Text style={styles.button} onPress={this.expandElement}>
          Expand
        </Text>
        <Text style={styles.button} onPress={this.collapseElement}>
              Collapse
        </Text>

      </View>
    )
  }
}

export default Animation

const styles = StyleSheet.create ({
    button: {
      borderWidth: 2,
      backgroundColor: 'orange',
      alignItems: 'center',
      padding: 10,
      marginTop: 10,
      marginBottom: 80,
    }
})
