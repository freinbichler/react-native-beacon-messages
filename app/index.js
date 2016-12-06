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
      isBeaconImmediate: false,
      messages: [],
      beaconMessages: [],
      immediateBeacon: 0
    };

    this.setBeaconImmediateLocation = this.setBeaconImmediateLocation.bind(this);
    this.isLocked = false;
    this.currentView = <Landing beacons={this.state.beacons} />;

    this.changeView = this.changeView.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    // Listen for beacon changes
    var subscription = DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        var isBeaconImmediate = false;
        var immediateBeacon = this.state.immediateBeacon;
        var beaconMessages = this.state.beaconMessages;
        data.beacons.forEach((beacon) => {
          if(beacon.proximity === "immediate") {
            isBeaconImmediate = true;
            immediateBeacon = beacon.minor;
            if(immediateBeacon !== this.state.immediateBeacon) {
              beaconMessages = this.state.messages.filter(message => message.beacon === immediateBeacon);
            }
          }
        });
        this.setState({
          beacons: data.beacons,
          isBeaconImmediate: isBeaconImmediate,
          immediateBeacon: immediateBeacon,
          beaconMessages: beaconMessages
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

  sendMessage(name, text) {
    this.itemsRef.push({ beacon: this.state.immediateBeacon, name, text });
  }

  listenForItems() {
    this.itemsRef.on('value', (snap) => {
      // get children as an array
      var messages = [];
      var immediateBeacon = this.state.immediateBeacon;
      snap.forEach((child) => {
        messages.push({
          beacon: child.val().beacon,
          name: child.val().name,
          text: child.val().text,
          _key: child.key
        });
        this.setState({
          messages: messages,
          beaconMessages: messages.filter(message => message.beacon === immediateBeacon).reverse()
        });
      });

    });
  }

  setBeaconImmediateLocation() {
    this.setState({
      isBeaconImmediate: false
    });
  }

  setLocked(lockState) {
    this.locked = lockState;
  }

  changeView(view, forceUpdate) {
    let nextView;
    // if(forceUpdate) alert(view);

    switch(view) {
      case "landing":
        nextView = <Landing beacons={this.state.beacons} />;
        break;
      case "forms":
        nextView = <Forms onDismiss={this.setBeaconImmediateLocation}
                          onChangeView={this.changeView}
                          onMessage={this.sendMessage} />;
        break;
      case "messages":
        nextView = <Messages
            onDismiss={this.setBeaconImmediateLocation}
            onChangeView={this.changeView}
            messages={this.state.beaconMessages}
            onLock={this.setLocked}
            />;
        break;
      case "found":
        nextView = <Found onChangeView={this.changeView} />;
        break;
      default:
        nextView = <Landing beacons={this.state.beacons} />;
    }

    this.currentView = nextView;

    if(forceUpdate) {
      this.forceUpdate;
      this.setLocked(true);

      if(view === 'found') {
        this.setLocked(false);
      }
    }
  }

  render() {
    if (!this.locked) this.state.isBeaconImmediate ? this.changeView('found', false) : this.changeView('landing', false);
    return this.currentView;
  }
}
