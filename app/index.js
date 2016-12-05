import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, DeviceEventEmitter } from 'react-native';
import Beacons from 'react-native-ibeacon';

var region = {
  identifier: 'Estimote Candy',
  uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
};

// Request for authorization while the app is open
Beacons.requestWhenInUseAuthorization();

Beacons.startMonitoringForRegion(region);
Beacons.startRangingBeaconsInRegion(region);

Beacons.startUpdatingLocation();



export default class BeaconMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beacons: [{proximity: "..."}]
    };

    // Listen for beacon changes
    var subscription = DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        this.setState({
          beacons: data.beacons
        })
        // alert(data.beacons[0].proximity);
        // data.region - The current region
        // data.region.identifier
        // data.region.uuid

        // data.beacons - Array of all beacons inside a region
        //  in the following structure:
        //    .uuid
        //    .major - The major version of a beacon
        //    .minor - The minor version of a beacon
        //    .rssi - Signal strength: RSSI value (between -100 and 0)
        //    .proximity - Proximity value, can either be "unknown", "far", "near" or "immediate"
        //    .accuracy - The accuracy of a beacon
      }
    );
  }

  render() {
    var beaconTexts = [];
    this.state.beacons.forEach((beacon) => {
      beaconTexts.push(<Text>{beacon.proximity}</Text>);
    });
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Look for messages!
        </Text>
        {beaconTexts}

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
