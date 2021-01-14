import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import NavigationBar from "./RPG-Dino/components/NavigationBar/NavigationBar";
import List from '../RPG-Dino/components/List';
import ListItem from '../RPG-Dino/components/ListItem';
import inventory from '../RPG-Dino/misc/inventory';
import Icon from '../RPG-Dino/components/Icon';

const InventoryScreen = ({ navigation }) => (
  <View style={styles.container}>
    <NavigationBar routeName={navigation.state.routeName} />
    <ScrollView
      style={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <List
        list={inventory}
        style={{ marginLeft: 0 }}
        children={item => (
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => {}}>
              {item.consumable && <Icon name="undoIcon" />}
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="questionIcon" />
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  </View>
);

const marginHorizontal = Dimensions.get('window').width / 9.375;
const styles = ExtendedStyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    height: Dimensions.get('window').height / 13.34,
    width: Dimensions.get('window').width / 8.92
  },
  contentContainer: {
    flex: 1,
    marginRight: marginHorizontal,
    marginLeft: marginHorizontal
  },
  text: {
    fontFamily: '$fontFamily',
    fontSize: '$mediumFont',
    color: '#000'
  },
  iconsContainer: {
    flex: 1.65,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

InventoryScreen.navigationOptions = {
  tabBarLabel: 'Jobs',

  tabBarIcon: ({ tintColor }) => (
    <Icon
      name="inventoryIcon"
      style={[styles.icon, { tintColor: tintColor }]}
    />
  )
};

export default InventoryScreen;
