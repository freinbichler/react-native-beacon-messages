import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Forms extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          You found a message!
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
  message: {
    fontSize: 20,
    fontFamily: 'Avenir',
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
});
