import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight, Text, Image, StyleSheet, Button } from 'react-native';
import { stylesGlobal, constants } from './styles.js';

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  goBack() {
    this.props.onChangeView('found', true);
  }

  render() {
    return (
      <View style={stylesComponent.container}>
      <Text style={stylesGlobal.logoText}>
        PEAKON
      </Text>
        <Text style={stylesComponent.heading}>
        Leave a message
        </Text>
        <TextInput
          style={stylesComponent.namefield}
          onChangeText={(text) => this.setState({text})}
          value={this.state.name}
          multiline={true}
          placeholder="Your name"
        />
        <TextInput
          style={stylesComponent.textfield}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline={true}
          placeholder="Your Message"
        />
        <TouchableHighlight
          style={stylesComponent.button}
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}>
          <Text style={stylesGlobal.buttonText}>LEAVE IT HERE</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={constants.actionColor}
          onPress={this.goBack}>
          <Text style={stylesGlobal.dismiss}>DISMISS</Text>
        </TouchableHighlight>
        <View style={stylesGlobal.mountainContainer}>
        <Image source={require('../images/mountain.png')} style={stylesGlobal.mountains}/>
        </View>
      </View>
    );
  }
}

const stylesComponent = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#9dc3bf',
  },
  namefield: {
    marginHorizontal: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 35,
    fontSize: 14,
    fontFamily: 'Avenir Next',
    color: constants.bgColor,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  textfield: {
    marginHorizontal: 50,
    marginVertical: 10,
    padding: 10,
    height: 150,
    fontSize: 14,
    fontFamily: 'Avenir Next',
    color: constants.bgColor,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  button: {
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    width: 180,
    backgroundColor: "#fff",
    marginBottom: 15
  },
  heading: {
    fontFamily: 'American Typewriter',
    fontSize: 18,
    color: constants.textColor,
    textAlign: 'center',
    marginTop: 15,
  },
  icon: {
    width: 60,
    height: 50,
    margin: 10
  }
});
