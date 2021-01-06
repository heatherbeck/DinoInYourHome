import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import Icon from '../Icon';

const StatusBar = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.rowContainer, { justifyContent: 'flex-end' }]}>
        <Icon style={styles.icon} name="healthIcon" />
        <Text style={styles.text}>60/100</Text>
      </View>
      <View style={styles.rowContainer}>
        <Icon style={styles.icon} name="energyIcon" />
        <Text style={styles.text}>60/100</Text>
      </View>
      <View style={styles.rowContainer}>
        <Icon style={[styles.icon, { tintColor: '#FFF' }]} name="coinsIcon" />
        <Text style={styles.text}>60/100</Text>
      </View>
    </View>
  );
};

const statusBarHeight = Dimensions.get('window').height / 27.79;
const marginHorizontal = Dimensions.get('window').width / 9.375;
const iconDimensions = Dimensions.get('window').width / 20.883;
const styles = ExtendedStyleSheet.create({
  container: {
    backgroundColor: '$opacityBlack',
    height: statusBarHeight,
    paddingRight: marginHorizontal,
    paddingLeft: marginHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: iconDimensions,
    width: iconDimensions
  },
  text: {
    fontFamily: '$fontFamily',
    color: '#0FF',
    fontSize: '$smallFont',
    alignSelf: 'center',
    marginLeft: '4%'
  }
});

export default StatusBar;
