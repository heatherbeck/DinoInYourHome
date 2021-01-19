import { TabNavigator, TabBarBottom } from 'react-navigation';
import React, { Component } from 'react';
import {

  StatusBar,
  View,
  Text,
  Dimensions,
  PixelRatio
} from 'react-native';
import CareScreen from './RPG-Dino/screens/CareScreen';
import WorkScreen from './RPG-Dino/screens/JobsScreen';

import CustomStatusBar from './RPG-Dino/components/StatusBar';
import NavigationBar from "./RPG-Dino/components/NavigationBar/index";
import InventoryScreen from './RPG-Dino/screens/InventoryScreen';

import { store, persistor } from './RPG-Dino/store';

import ShopScreen from './RPG-Dino/screens/ShopScreen';
import CustomSplashScreen from './RPG-Dino/components/SplashScreen';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import SplashScreen from 'react-native-splash-screen';

console.disableYellowBox = true;

const normalizeFont = size => {
  if (PixelRatio.get() >= 1.5 && PixelRatio.get() < 2) {
    return size - 3;
  }
  if (PixelRatio.get() >= 2 && PixelRatio.get() < 3) {
    return size - 2;
  }
  if (PixelRatio.get() >= 3 && PixelRatio.get() < 4) {
    return size;
  }
  if (PixelRatio.get() >= 4 && PixelRatio.get() < 5) {
    return size + 1;
  }
  return size;
};

ExtendedStyleSheet.build({
  $smallFont: () => normalizeFont(16),
  $bigFont: () => normalizeFont(22),
  $bigFontBold: () => normalizeFont(20),
  $mediumFont: () => normalizeFont(20),
  $fontFamily: 'AdobeGararamondPro',
  $fontFamilyBold: 'AdobeGararamondPro-Bold',
  $opacityBlack: 'rgba(0,0,0,0.85)',
  $listMarginHorizontal: '2.5%'
});

const tabWidth = Dimensions.get('window').width / 5;

const styles = ExtendedStyleSheet.create({
  tabNavigator: {
    height: tabWidth,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopColor: '$opacityBlack',
    borderBottomColor: '$opacityBlack'
  },
  tab: {
    width: tabWidth,
    borderColor: '$opacityBlack'
  },
  container: {
    flex: 1
  }
});

const Navigator = TabNavigator(
  {
  
    Inventory: {
      screen: InventoryScreen
    },
    Work: {
      screen: WorkScreen
    },
    Shop: {
      screen: ShopScreen
    },
    Arena: {
      screen: CareScreen
    }
  },
  {
    tabBarComponent: TabBarBottom,
    animationEnabled: false,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      scrollEnabled: false,
      activeTintColor: 'rgba(0,0,0,0.9)',
      inactiveBackgroundColor: 'rgba(0,0,0,0.85)',
      inactiveTintColor: '#FFF',
      activeBackgroundColor: '#FFF',
      style: styles.tabNavigator,
      tabStyle: styles.tab
    }
  }
);
class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar hidden backgroundColor="#000" />
          <CustomStatusBar />
          <Navigator />
        </View>
      </Provider>
    );
  }
}

export default App;
