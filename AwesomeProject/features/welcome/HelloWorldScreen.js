import React, { Component } from 'react';
import { 
  SafeAreaView,
  View, 
  Text 
} from 'react-native';

export class HelloWorldScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{height:100}}>This is the home screen</Text>
      </View>
    )
  }
}

export default HelloWorldScreen
