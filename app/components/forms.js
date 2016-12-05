import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight, Text, Image, StyleSheet } from 'react-native';
import { stylesGlobal, constants } from './styles.js';

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <View style={stylesComponent.container}>
        <Image source={require('../images/message_icon.png')} style={stylesGlobal.icon}/>
        <Text style={stylesGlobal.message}>
          You found a message!
        </Text>
        <TextInput
          style={stylesComponent.textfield}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline={true}
          placeholder="Enter a new message for someone else to find"
        />
        <TouchableHighlight
          style={stylesComponent.button}
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}>
          <Text style={stylesGlobal.actionText}>Leave message 💌</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const stylesComponent = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#9dc3bf',
  },
  textfield: {
    margin: 10,
    padding: 10,
    height: 150, 
    fontSize: 14,
    fontFamily: 'Avenir Next',
    color: '#fff',
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.25)"
  },
  button: {
    margin: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.5)"
  }
});
