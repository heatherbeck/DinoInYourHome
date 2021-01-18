import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';

import { TabNavigator, TabBarBottom } from 'react-navigation';
import {
  StyleSheet,

  PixelRatio
} from 'react-native';
import CareScreen from './screens/CareScreen';
import WorkScreen from './screens/JobsScreen';

import CustomStatusBar from './components/StatusBar';
import NavigationBar from './components/NavigationBar';
import InventoryScreen from './screens/InventoryScreen';
import { Provider } from 'react-redux';
import { store, persistor } from './RPG-Dino/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import ShopScreen from './RPG-Dino/screens/ShopScreen';
import CustomSplashScreen from './RPG-Dino/components/SplashScreen';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';



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
