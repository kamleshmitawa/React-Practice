import React from 'react'
import {Router, Scene} from 'react-native-router-flux'
import Home from './Home'
import About from './About'

const Routes = () => (
  <Router >
    <Scene key= "root" style={{flex: 1, justifyContent: 'spaceAround'}}>
      <Scene key="home" title="HOME" component= {Home} initial = {true}/>
      <Scene key="about" title= "ABOUT" component= {About} />
    </Scene>
  </Router>
)

export default Routes
