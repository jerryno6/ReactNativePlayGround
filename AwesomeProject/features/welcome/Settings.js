// Settings.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Settings extends Component {
    static navigationOptions = {
        title: 'Settings',
    }

  render() {
    return (
      <View>
        <Text 
          style={{fontWeight:'bold', fontSize:20, padding:20, textAlign:'center'}}
        >This is the Settings screen</Text>
      </View>
    )
  }
};

export default Settings;
