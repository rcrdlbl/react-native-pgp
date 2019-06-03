import React, { Component } from 'react';
import { AppRegistry, ScrollView, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import MessageInputField from '../components/MessageInputField'

class EnterTargetKeyScreen extends Component {
  static navigationOptions = {
    title: 'Input Recipient Public Key'
  }

  state = {
    messageContent: ""
  }

  onMessageFieldChange(text) {
    this.setState({
      messageContent: text
    })
  }

  render() {
    return(
      <ScrollView>
        <MessageInputField onChange={this.onMessageFieldChange} />
        <Button
          title="Next >>"
          accessibilityLabel="Encode"
          onPress={() => this.props.navigation.navigate('EncodingResult')}
        />
      </ScrollView>
    )
  }
}

export default EnterTargetKeyScreen
