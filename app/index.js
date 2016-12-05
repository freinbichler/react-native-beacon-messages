import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, DeviceEventEmitter } from 'react-native';
import Beacons from 'react-native-ibeacon';
import Forms from './components/forms';
import Landing from './components/landing';

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
      beacons: []
    };
  }

  componentDidMount() {
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
    var isBeaconImmediate = false;
    this.state.beacons.forEach((beacon) => {
      if(beacon.proximity === "immediate") {
        isBeaconImmediate = true;
      }
    });

    return isBeaconImmediate ? <Forms /> : <Landing beacons={this.state.beacons} />;
  }
}
