import React ,{Component} from 'react';
import {Text,TextInput,TouchableOpacity,View, StyleSheet} from 'react-native';

class Login extends Component {
  state= {
    email: '',
    password: '',
  }
  emailhadler = (text) => {
    this.setState({
      email: text
    })
  }
  passwordhadler = (text) => {
    this.setState({
      password: text
    })
  }
  login = (email, pass) => {
    alert('email:' + email +'/n'+ 'password:'+ pass)

  }


  render(){
    return(
      <View>
        <TextInput placeholder="Email"
          underlineColorAndroid = "transparent"
          autoCapitalize="none"
          onChangeText = {this.emailhadler}
          style={Loginstyle.input}>
        </TextInput>
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          underlineColorAndroid = "transparent"
          onChangeText={this.passwordhadler}
          style={Loginstyle.input}>

        </TextInput>
        <TouchableOpacity onPress= {() => this.login(this.state.email, this.state.password)}>
          <Text style={Loginstyle.button}>Login</Text>
      </TouchableOpacity>
    </View>

  )
}
}

export default Login;

const Loginstyle = StyleSheet.create({
  input: {
    margin: 1,
    padding: 3,
    //height: 20,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    margin: 3,
    alignItems: 'center',
  }
})
