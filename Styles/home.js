import React from 'react';
import {View,Button, Text,StyleSheet, Image} from 'react-native';
import List from './List';
import Login from './Login';

const Home = (props) => {
  return (
    <View>
    <View style={styles.container}>
      <Text> MY First App </Text>
      <Image source={require('./b.jpeg')}></Image>
    </View>
    <View style={styles.redbox}>
      <Text>
         hi i am kamlesh.
      </Text>
    </View>
    <View style={styles.yellowbox}>
      <Text>this is yellow box. </Text>
    </View>
    <View>
      <List />
    <Login />
    </View>

  </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'grey',
       //height: 600
       marginTop: 50,
       padding: 20,

    },
    redbox: {
      backgroundColor: 'red',
      //flex: 1,

    },
    yellowbox: {
      backgroundColor: 'yellow',
     //flex:1,
    },


})
