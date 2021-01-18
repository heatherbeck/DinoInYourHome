import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import ListItem from '../components/ListItem';
import List from '../components/List';
import Icon from '../components/Icon';
import { easyJobs, mediumJobs} from '../../RPG-Dino/misc/jobs';
import withExpandableTables from '../../RPG-Dino/HOC/withExpandableTables';

e
import withModal from '../../RPG-Dino/HOC/withModal';
import { compose } from 'redux';

class ShopScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Shop',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="shopIcon" style={[styles.icon, { tintColor: tintColor }]} />
    )
  };
  render() {
    const { expandedTables, expandTable, openModal } = this.props;
    const { SUPPLIES, FOOD, DRINK } = expandableTables;
    return (
      <View style={styles.container}>
        <NavigationBar routeName={this.props.navigation.state.routeName} />
        <ScrollView style={styles.container}>
          <View>
            <TouchableOpacity onPress={() => expandTable(WEAPON)}>
              <ListItem style={styles.listItem}>
                <Text style={styles.text}>Weapons</Text>
              </ListItem>
            </TouchableOpacity>
            {expandedTables[SUPPLIES] && (
              <List
                list={supplies}
                children={item => (
                  <View style={styles.iconsContainer}>
                    <View style={{ justifyContent: 'flex-end', flex: 0.7 }}>
                      <Text style={styles.priceText}>{item.price}</Text>
                    </View>
                    <Icon
                      style={{ tintColor: '#000', height: 25, width: 25 }}
                      name="coinsIcon"
                    />
                    <TouchableOpacity onPress={() => openModal(item.id)}>
                      <Icon name="questionIcon" />
                    </TouchableOpacity>
                    <Icon name="coinsIconCircle" />
                  </View>
                )}
              />
            )}
            <TouchableOpacity onPress={() => expandTable(FOOD)}>
              <ListItem style={styles.listItem}>
                <Text style={styles.text}>Food</Text>
              </ListItem>
            </TouchableOpacity>
            {expandedTables[FOOD] && (
              <List
                list={food}
                children={item => (
                  <View style={styles.iconsContainer}>
                    <View style={{ justifyContent: 'flex-end', flex: 0.7 }}>
                      <Text style={styles.priceText}>{item.price}</Text>
                    </View>
                    <Icon
                      style={{ tintColor: '#000', height: 25, width: 25 }}
                      name="coinsIcon"
                    />
                    <TouchableOpacity onPress={() => openModal(item.id)}>
                      <Icon name="questionIcon" />
                    </TouchableOpacity>
                    <Icon name="coinsIconCircle" />
                  </View>
                )}
              />
            )}
            <TouchableOpacity onPress={() => expandTable(DRINK)}>
              <ListItem style={styles.listItem}>
                <Text style={styles.text}>Drinks</Text>
              </ListItem>
            </TouchableOpacity>
            {expandedTables[DRINK] && (
              <List
                list={drink}
                children={item => (
                  <View style={styles.iconsContainer}>
                    <View style={{ justifyContent: 'flex-end', flex: 0.7 }}>
                      <Text style={styles.priceText}>{item.price}</Text>
                    </View>
                    <Icon
                      style={{ tintColor: '#000', height: 25, width: 25 }}
                      name="coinsIcon"
                    />
                    <TouchableOpacity onPress={() => openModal(item.id)}>
                      <Icon name="questionIcon" />
                    </TouchableOpacity>
                    <Icon name="coinsIconCircle" />
                  </View>
                )}
              />
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = ExtendedStyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    marginLeft: '$listMarginHorizontal',
    fontFamily: '$fontFamily',
    fontSize: '$bigFont'
  },
  priceText: {
    fontFamily: '$fontFamily',
    alignSelf: 'flex-end',
    fontSize: '$smallFont'
  },
  icon: {
    height: Dimensions.get('window').height / 13.34,
    width: Dimensions.get('window').width / 8.92
  },
  listItem: {
    backgroundColor: '#e3e3e3'
  },
  iconsContainer: {
    flex: 3.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '$listMarginHorizontal'
  }
});

export default compose(withModal, withExpandableTables)(ShopScreen);
