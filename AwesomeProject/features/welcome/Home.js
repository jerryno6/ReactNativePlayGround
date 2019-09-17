// Home.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Home extends React.Component {
  constructor() {
    super();

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getMinutes();
    this.currentDate = {
      date: date,
      time: time,
    }
  }

  static navigationOptions = {
      title: 'Home',
  }

  getDate() {
    return new Date();
  };
  
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <Text
          style={{fontWeight:'bold', fontSize:20, padding:20, textAlign:'center'}}
        >Welcome to React Native</Text>
        <Text
          style={{fontWeight:'normal', fontSize:20, padding:20, textAlign:'center'}}
        >Today is {this.currentDate.date} {this.currentDate.time}</Text>
        <Button 
            title='Go to Settings screen !'
            onPress={() => navigate('Settings')}
        />
      </View>
    )
  }
}

export default Home