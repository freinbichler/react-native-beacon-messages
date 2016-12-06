import { StyleSheet } from 'react-native';

const constants = {
  actionColor: '#24CE84',
  textColor: '#fff'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#9dc3bf'
  },
  message: {
    fontSize: 20,
    fontFamily: 'Avenir',
    textAlign: 'center',
    margin: 10,
    color: constants.textColor,
  },
  icon: {
    width: 60,
    height: 40,
    margin: 10
  },
  actionText: {
    color: constants.textColor
  }

});

module.exports = {stylesGlobal: styles, constants};