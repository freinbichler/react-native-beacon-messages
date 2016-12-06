import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView } from 'react-native';
import { stylesGlobal,  constants } from './styles.js';

export default class Messages extends Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.onChangeView('found', true);
  }

  render() {
    const messageTexts = this.props.messages.map((message, index) =>
      <View key={index}>
        <Text style={stylesComponent.messageName}>
          {message.name}
        </Text>
        <Text  style={stylesComponent.messageText}>
          {message.text}
        </Text>
        <View style={stylesComponent.separator}/>
      </View>
    );
    return (
      <View style={stylesComponent.container}>
        <Text style={stylesGlobal.logoText}>
          PEAKON
        </Text>

        <View style={stylesComponent.flex1}>
          <Text style={stylesComponent.heading}>
            Messages
          </Text>
          <View style={stylesGlobal.separatorShort}></View>
          <View style={stylesGlobal.separatorLong}></View>
        </View>

        <View style={stylesComponent.flex2}>

        <ScrollView
          automaticallyAdjustContentInsets={false}
          >
        {messageTexts}
        </ScrollView>
        </View>

      <View style={stylesComponent.flex3}>
        <TouchableHighlight
          style={stylesComponent.button}
          underlayColor={constants.actionColor}
          onPress={this.goBack}>
          <Text style={stylesGlobal.buttonText}>GO BACK</Text>
        </TouchableHighlight>
      </View>

        <View style={stylesGlobal.mountainContainer}>
          <Image source={require('../images/mountain.png')} style={stylesGlobal.mountains}/>
        </View>
      </View>
    );
  }
}

const stylesComponent = StyleSheet.create({
  flex1: {
    flex:1
  },
  flex2: {
    flex:7
  },
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#9dc3bf',
    paddingBottom: 100,
  },
  heading: {
    height: 50,
    fontSize: 20,
    fontFamily: 'American Typewriter',
    color: constants.textColor,
    textAlign: 'center',
  },
  icon: {
    width: 60,
    height: 50,
    margin: 10
  },
  button: {
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    width: 180,
    backgroundColor: "#fff",
    marginBottom: 15,
    marginTop: 30
  },
  messageName: {
    fontSize: 15,
    fontFamily: 'Menlo',
    color: constants.textColor,
    textAlign: 'center',
    marginTop: 40,
  },
  messageText: {
    fontSize: 12,
    fontFamily: 'Avenir',
    color: constants.textColor,
    opacity: 0.9,
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 50,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    height: 10,
    width: 40,
    alignSelf: 'center',
  }
  });
