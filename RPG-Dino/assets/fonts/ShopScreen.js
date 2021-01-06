import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBar from '../components/NavigationBar';
import pure from 'recompose/pure';
const ShopScreen = ({ navigation }) => (
  <View style={styles.container}>
    <NavigationBar routeName={navigation.state.routeName} />
  </View>
);

const styles = ExtendedStyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    height: Dimensions.get('window').height / 13.34,
    width: Dimensions.get('window').width / 8.92
  }
});

ShopScreen.navigationOptions = {
  tabBarLabel: 'Shop',
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('./shopIcon.png')}
      resizeMode="contain"
      style={[styles.icon, { tintColor }]}
    />
  )
};

export default ShopScreen;
