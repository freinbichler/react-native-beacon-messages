import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, DeviceEventEmitter } from 'react-native';
import Beacons from 'react-native-ibeacon';
import Forms from './components/forms';
import Landing from './components/landing';
import Found from './components/found';
import Messages from './components/messages';
import { firebaseApp } from './config/firebase';

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

    this.itemsRef = firebaseApp.database().ref();

    this.state = {
      beacons: [],
      isBeaconImmediate: false
    };

    this.setBeaconImmediateLocation = this.setBeaconImmediateLocation.bind(this);
  }

  componentDidMount() {
    // Listen for beacon changes
    var subscription = DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        var isBeaconImmediate = this.state.isBeaconImmediate;
        data.beacons.forEach((beacon) => {
          if(beacon.proximity === "immediate") {
            isBeaconImmediate = true;
          }
        });
        this.setState({
          beacons: data.beacons,
          isBeaconImmediate: isBeaconImmediate
        });
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

    this.listenForItems()
  }

  listenForItems() {
    // this.itemsRef.push({ name: "Hubert", text: "Hello World!" });

    this.itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          name: child.val().name,
          text: child.val().text,
          _key: child.key
        });
      });

      console.log(items);

      // this.setState({
      //   dataSource: this.state.dataSource.cloneWithRows(items)
      // });

    });
  }

  setBeaconImmediateLocation() {
    this.setState({
      isBeaconImmediate: false
    });
  }

  render() {
    // return <Messages onDismiss={this.setBeaconImmediateLocation} />
    return this.state.isBeaconImmediate ? <Forms onDismiss={this.setBeaconImmediateLocation} /> : <Landing beacons={this.state.beacons} />;
  }
}
