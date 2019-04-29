import React, { Component } from 'react';
import { AppRegistry, ScrollView, Button } from 'react-native';
import MessageInputField from '../components/MessageInputField'

class EncodeScreen extends Component {
  static navigationOptions = {
    title: 'Compose Message'
  }

  render() {
    return(
      <ScrollView>
        <MessageInputField />
        <Button
          title="Next >>"
          accessibilityLabel="Encode"
        />
      </ScrollView>
    )
  }
}

export default EncodeScreen
