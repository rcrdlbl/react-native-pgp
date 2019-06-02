import React, { Component } from 'react';
import { AppRegistry, ScrollView, Button } from 'react-native';
import MessageInputField from '../components/MessageInputField'

class EncodeScreen extends Component {
  static navigationOptions = {
    title: 'Compose Message'
  }

  state = {
    messageContent: ""
  }

  onNextButtonPress() {
    true
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
          onPress={this.onNextButtonPress}
        />
      </ScrollView>
    )
  }
}

export default EncodeScreen
