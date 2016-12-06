import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { stylesGlobal,  constants } from './styles.js';

export default class Found extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return (
      <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.logoText}>
          PEAKON
        </Text>
        <Image source={require('../images/surprise.png')} style={stylesComponent.icon}/>
        <Text style={stylesComponent.heading}>
        Hell yeah!
        </Text>
        <Text style={stylesComponent.subheading}>
        You found a beacon!
        </Text>
        <TouchableHighlight
          style={stylesComponent.button}
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}>
          <Text style={stylesGlobal.buttonText}>LEAVE MESSAGE</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={stylesComponent.button}
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}>
          <Text style={stylesGlobal.buttonText}>READ BEACON MESSAGES</Text>
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
    fontFamily: 'American Typewriter',
    fontSize: 18,
    color: constants.textColor,
    textAlign: 'center',
    marginTop: 15,
  },
  subheading: {
    fontSize: 11,
    fontFamily: 'Menlo',
    color: constants.textColor,
    textAlign: 'center',
    width: 250,
    lineHeight: 17,
    letterSpacing: 1.3,
    marginTop: 5,
    marginBottom: 70
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
