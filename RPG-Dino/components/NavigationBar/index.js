import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';

const NavigationBar = ({ routeName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{routeName}</Text>
    </View>
  );
};

const navigationBarHeight = Dimensions.get('window').height / 15.5;
const styles = ExtendedStyleSheet.create({
  container: {
    backgroundColor: '$opacityBlack',
    height: navigationBarHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'AdobeGararamondPro-Bold',
    fontWeight: '200',
    color: '#FFF',
    fontSize: '$bigFont'
  }
});

export default NavigationBar;
