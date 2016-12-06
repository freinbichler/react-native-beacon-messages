import { StyleSheet } from 'react-native';

const constants = {
  actionColor: '#4c8480',
  textColor: '#fff',
  bgColor: '#9dc3bf'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: constants.bgColor
  },
  message: {
    fontSize: 20,
    fontFamily: 'Avenir',
    textAlign: 'center',
    margin: 10,
    color: constants.textColor,
  },
  actionText: {
    color: constants.textColor
  },
  buttonText: {
    color: constants.bgColor,
    fontSize: 12,
    fontFamily: 'Menlo',
    textAlign: 'center'
  },
  dismiss: {
    fontSize: 12,
    fontFamily: 'Menlo',
    color: constants.textColor,
  },
  logoText: {
    position: 'absolute',
    top: 30,
    left: 20,
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Superclarendon',
    color: constants.textColor,
  },
  icon: {
    width: 60,
    height: 40,
    margin: 10
  },
  mountainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    bottom: -50,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: -1
  },
  mountains: {
    flex: 1,
    resizeMode: 'contain', // or 'stretch'
  },
  separatorShort: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
    height: 10,
    width: 140,
    alignSelf: 'center',
    position: 'absolute',
    top: 20, left: -25
  },
  separatorLong: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
    height: 10,
    width: 200,
    alignSelf: 'center',
    position: 'absolute',
    top: 25, left: -50
  }

});

module.exports = {stylesGlobal: styles, constants};
