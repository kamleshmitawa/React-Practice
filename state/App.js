 import React, { Component } from 'react';
 import { Text, View, Image, WebView,TouchableHighlight, ImageBackground } from 'react-native';

 class Home extends Component {
    state = {
       myState: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad   minim veniam, quis nostrud  exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident sunt in culpa quiofficia deserunt mollit anim id est laborum."
    }
  update = () => {
    this.setState =({
      myState: 'this is updated state'
    })
  }

  handlePress(){
      console.log('press by you');
    }
    handleLongPress(){
      console.log('longPress');
    }

    render() {
       return (
          <View style={{backgroundColor:'blue'}}>
             <Text onLoad = {this.update}>
                {this.state.myState}
             </Text>
             <ImageBackground source={require('./1.png')} style={{width: 200, height: 300}}>
<Text> this is inside imagebackground</Text>
           </ImageBackground>
           <View style={{width:1000, height: 20, backgroundColor: 'red'}}>
            <Text>Both are different image components</Text>
           </View>
            <Image source={require('./1.png')} style= {{width:500, height: 100}}/>
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                  style={{width: 30, height: 50}}
            />
          <Text>kamlesh</Text>

         <Image
           style={{
             width: 51,
             height: 51,
             resizeMode: Image.resizeMode.contain,
           }}
           source={{
             uri:
               'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
           }}
         />

       <TouchableHighlight style={{backgroundColor:'yellow'}}
                onPress={this.handlePress}
                onLongPress={this.handleLongPress}>
                <View>
                  <Text>Press me!</Text>
                </View>
              </TouchableHighlight>
        </View>
       );
    }
 }
  class MyWeb extends Component {
   render() {
     return (
       <WebView
         source={{uri: 'https://reactjs.org/logo-og.png'}}
         style={{marginTop: 20}}
       />
     );
   }
 }

 export default Home;
