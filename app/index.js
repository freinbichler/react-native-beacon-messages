import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class BeaconMessages extends Component {
  render() {
    return (
      <View style={styles.container}>
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
    backgroundColor: '#9dc3bf',
  },
  welcome: {
    fontSize: 20,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: '#fff',
    margin: 10,
  }
});