import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native'

class MessageInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        editable = {true}
      />
    )
  }
}

class MessageInputField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Compose a message'
    }
  }

  render() {
    return(
      <View>
        <MessageInput
          multiline = {true}
          numberOfLines = {20}
          onChangeText = {(text) => this.setState({text})}
          value = {this.state.text}
        />
      </View>
    )
  }
}

export default MessageInputField
