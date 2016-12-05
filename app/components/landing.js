import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { stylesGlobal } from './styles.js';

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.range = this.colorRange([70, 112, 107], [157, 195, 191], 50)
  }

  colorRange(firstColor,secondColor, bands) {
    let delta = [];
    for (let i = 0; i < 4; i++){
      delta[i] = (firstColor[i] - secondColor[i]) / (bands + 1);
    }
    return [firstColor,secondColor, delta]
  }

  calculateColor() {
    if(this.props.beacons.length && this.props.beacons[0].proximity != "unknown") {
      let rssi = 100 - Math.abs(this.props.beacons[0].rssi);

      var r = Math.round(this.range[0][0] - this.range[2][0] * rssi);
      var g = Math.round(this.range[0][1] - this.range[2][1] * rssi);
      var b = Math.round(this.range[0][2] - this.range[2][2] * rssi);

      return `rgba(${r},${g},${b},1)`;
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
