import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { stylesGlobal,  constants } from './styles.js';

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.emojis = [
      [0, '💃'],
      [2, '🦄'],
      [3, '☺️'],
      [6, '😊'],
      [8, '😐'],
      [12, '😕'],
      [15, '😞'],
      [25, '💩']
    ]
  }

  render() {
    let emojiIcon, distance;
    const beaconTexts = this.props.beacons.map((beacon) =>
      <Text key={beacon.minor}>
        {beacon.minor}: {beacon.proximity} ({beacon.accuracy})
      </Text>
    );

    if (this.props.beacons.length) {
      distance = parseInt(this.props.beacons[0].accuracy);
      this.emojis.forEach((emoji) => {
        if(emoji[0] <= distance) emojiIcon = emoji[1];
      });
      if(distance < 0) emojiIcon = '❌';
    }

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
        <Text  style={stylesComponent.emoji}>
          {emojiIcon}
        </Text>
        <Text  style={stylesComponent.distance}>
          {distance}
        </Text>
        {/*beaconTexts*/}
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
  },
  emoji: {
    marginVertical: 20,
    fontSize: 50,
    textAlign: 'center',
    padding: 2
  },
  distance: {
    fontSize: 19,
    fontFamily: 'Menlo',
    color: constants.textColor,
    opacity: 0.6,
    textAlign: 'center'
  }

  });
