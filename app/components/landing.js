import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      <Image source={require('../images/message_icon.png')} style={styles.icon}/>
      <Text style={styles.welcome}>
      Look for messages!
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#9dc3bf',
  },
  welcome: {
    fontSize: 20,
    fontFamily: 'Avenir',
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  icon: {
    width: 60,
    height: 40,
    margin: 10
  },
  beaconText: {
    color: '#fff',
  }
});