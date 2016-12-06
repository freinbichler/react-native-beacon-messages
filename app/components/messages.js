import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { stylesGlobal,  constants } from './styles.js';

export default class Messages extends Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.onChangeView('found', true);
  }

  render() {
    const messageTexts = this.props.messages.map((message, index) =>
      <View key={index}>
        <Text>
          {message.name}
        </Text>
        <Text>
          {message.text}
        </Text>
      </View>
    );
    return (
      <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.logoText}>
          PEAKON
        </Text>
        <Text style={stylesComponent.heading}>
          Messages
        </Text>

        {messageTexts}

        <TouchableHighlight
          style={stylesComponent.button}
          underlayColor={constants.actionColor}
          onPress={this.goBack}>
          <Text style={stylesGlobal.buttonText}>GO BACK</Text>
        </TouchableHighlight>
        <View style={stylesGlobal.mountainContainer}>
          <Image source={require('../images/mountain.png')} style={stylesGlobal.mountains}/>
        </View>
      </View>
    );
  }
}

const stylesComponent = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'American Typewriter',
    color: constants.textColor,
    textAlign: 'center',
    marginTop: 15
  },
  icon: {
    width: 60,
    height: 50,
    margin: 10
  },
  button: {
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    width: 180,
    backgroundColor: "#fff",
    marginBottom: 15
  }
  });
