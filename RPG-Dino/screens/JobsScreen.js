import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import NavigationBar from '../components/NavigationBar';
import ListItem from '../components/ListItem';
import List from '../components/List';
import Icon from '../components/Icon';
import { easyJobs, mediumJobs, } from '../misc/jobs';
import withExpandableTables from '../HOC/withExpandableTables';
import * as expandableTables from '../constants/expandableTables';
import withModal from '../HOC/withModal';
import { compose } from 'redux';

const listItemHeight = Dimensions.get('window').height / 16.675;

class WorkScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Work',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="workIcon" style={[styles.icon, { tintColor: tintColor }]} />
    )
  };
  render() {
    const { expandedTables, expandTable, openModal } = this.props;
    const { EASY_JOBS, MEDIUM_JOBS} = expandableTables;
    return (
      <View style={styles.container}>
        <NavigationBar routeName={this.props.navigation.state.routeName} />
        <ScrollView style={styles.container}>
          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => expandTable(EASY_JOBS)}
            >
              <ListItem style={styles.listItem}>
                <Text style={styles.text}>Easy Jobs</Text>
              </ListItem>
            </TouchableOpacity>
            {expandedTables[EASY_JOBS] && (
              <List
                list={easyJobs}
                children={item => (
                  <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={() => openModal(item.id)}>
                      <Icon name="questionIcon" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Icon name="acceptIcon" />
                    </TouchableOpacity>
                  </View>
                )}
              />
            )}
          </View>
          <View>
            <TouchableOpacity onPress={() => expandTable(MEDIUM_JOBS)}>
              <ListItem style={styles.listItem}>
                <Text style={styles.text}>Medium Jobs</Text>
              </ListItem>
            </TouchableOpacity>
            {expandedTables[MEDIUM_JOBS] && (
              <List
                list={mediumJobs}
                children={item => (
                  <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={() => openModal(item.id)}>
                      <Icon name="questionIcon" />
                    </TouchableOpacity>
                    <Icon name="acceptIcon" />
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
  icon: {
    height: Dimensions.get('window').height / 13.34,
    width: Dimensions.get('window').width / 8.92
  },
  listItem: {
    backgroundColor: '#e3e3e3'
  },
  iconsContainer: {
    flex: 1.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '$listMarginHorizontal'
  }
});

export default compose(withModal, withExpandableTables)(WorkScreen);
