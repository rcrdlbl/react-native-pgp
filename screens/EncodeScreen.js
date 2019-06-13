import React, { Component } from 'react';
import { AppRegistry, ScrollView, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import MessageInputField from '../components/MessageInputField'

class EncodeScreen extends Component {
  static navigationOptions = {
    title: 'Compose Message'
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
          onPress={() => this.props.navigation.navigate('DecodedMessage')}
        />
      </ScrollView>
    )
  }
}

export default EncodeScreen
