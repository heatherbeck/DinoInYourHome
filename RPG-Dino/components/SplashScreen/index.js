import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from './styles';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SplashScreen = () => (
  <View style={styles.container}>
    <Text>Hi There!</Text>
  </View>
);

export default SplashScreen;
