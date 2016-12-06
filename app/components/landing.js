import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { stylesGlobal,  constants } from './styles.js';

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
        {beacon.minor}: {beacon.proximity} ({beacon.accuracy})
      </Text>
    );
    return (
      <View style={stylesGlobal.container}>
        <Text style={stylesComponent.heading}>
          PEAKON
        </Text>
        <Text style={stylesComponent.subheading}>
          FIND BEACONS, GET CLOSER TO THE PEAK AND LEAVE MESSAGES!
        </Text>
        <View style={stylesGlobal.mountainContainer}>
        <Image source={require('../images/mountain.png')} style={stylesGlobal.mountains}/>
        </View>
        {beaconTexts}
      </View>
    );
  }
}

const stylesComponent = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Superclarendon',
    color: constants.textColor,
    textAlign: 'center'
  },
  subheading: {
    fontSize: 11,
    fontFamily: 'Menlo',
    color: constants.textColor,
    textAlign: 'center',
    width: 250,
    lineHeight: 17,
    letterSpacing: 1.5,
    marginTop: 20
  }
  });
