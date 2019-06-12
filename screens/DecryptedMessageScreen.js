import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

class DecryptedMessageScreen extends Component {
  static navigationOptions = {
    title: 'Message:'
  }


  render() {
    return(
      <ScrollView>
        <Text>Finished Message</Text>
      </ScrollView>
    )
  }
}

export default DecryptedMessageScreen
