import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { stylesGlobal } from './styles.js';

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }

  calculateColor() {
    if(this.props.beacons.length) {
      let rssi = Math.abs(this.props.beacons[0].rssi);
      let firstColor = [255, 255, 255]; 
      let secondColor = [0, 0, 0]; 
      let bands = 50;
      let delta = [];

      for (let i = 0; i < 4; i++){
        delta[i] = (firstColor[i] - secondColor[i]) / (bands + 1);
      }

      var r = Math.round(firstColor[0] - delta[0] * rssi);
      var g = Math.round(firstColor[1] - delta[1] * rssi);
      var b = Math.round(firstColor[2] - delta[2] * rssi);

      return `rgba(${r},${g},${b})`; 
    } else {
      return '#9dc3bf';
    }
  }

  render() {
    const beaconTexts = this.props.beacons.map((beacon) =>
      <Text key={beacon.minor}>
        {beacon.minor}: {beacon.proximity} ({beacon.rssi})
      </Text>
    );
    return (
      <View style={{backgroundColor: this.calculateColor(), 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', }}>
        <Image source={require('../images/message_icon.png')} style={stylesGlobal.icon}/>
        <Text style={stylesGlobal.message}>
          Look for messages!
        </Text>
        {beaconTexts}
      </View>
    );
  }
}
