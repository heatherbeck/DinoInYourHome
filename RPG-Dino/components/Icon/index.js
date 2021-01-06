import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import icons from './icons';

const Icon = ({ name, style }) => (
  <Image
    resizeMode="contain"
    style={[styles.icon, style]}
    source={icons[name]}
  />
);

const iconDimensions = Dimensions.get('window').width / 10.3;
const styles = ExtendedStyleSheet.create({
  icon: {
    height: iconDimensions,
    width: iconDimensions
  }
});

export default Icon;
