import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { stylesGlobal } from './styles.js';

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={stylesGlobal.container}>
      <Image source={require('../images/message_icon.png')} style={stylesGlobal.icon}/>
      <Text style={stylesGlobal.message}>
      Look for messages!
      </Text>
      </View>
    );
  }
}

