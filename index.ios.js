/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import BeaconMessages from './app';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//var Beacons = require('react-native-ibeacon');

var region = {
  identifier: 'Estimote Candy',
  uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D:29048:61507'
};

AppRegistry.registerComponent('BeaconMessages', () => BeaconMessages);
