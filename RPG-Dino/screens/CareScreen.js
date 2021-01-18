import React, { Component } from 'react';
import { View, Text, Dimensions, Image, Button } from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import Modal from '../components/Modal';

class CareScreen extends Component {
  state = {
    visible: false,
    showFirstText: true,
    showSecondText: false,
    showThirdText: false,
    firstText: 'Welcome!',
    secondText: 'Have You Ever Wanted A Dino Friend?',
    thirdText: 'Reptiles Are The Dinos Of Today!',
  };


  onPress = () => {
    this.setState(
      prevState => ({ visible: !prevState.visible }),
      () => this.start()
    );
  };

  hideModal = () => {
    this.Message.map(message => careMessage(message));
    this.setState({
      visible: false,
      showSecondText: false,
      showThirdText: false
    });
  };

  render() {
    const {
      visible,
      firstText,
      secondText,
      thirdText,
      showSecondText,
      showThirdText
    } = this.state;
    console.log(`firstMessage ${firstText} secondMessage ${showSecondText} thirdMessage ${showThirdText}`);
    return (
      <View style={styles.container}>
        <NavigationBar routeName={this.props.navigation.state.routeName} />
        <Modal
          visible={visible}
          closeOnTouchOutside
          hideModal={this.hideModal}
          animationType="fade"
          containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.60)' }}
          childrenWrapperStyle={{ backgroundColor: '#FFFF' }}
        >
          <Text style={styles.text}>
            <Text style={[styles.text, { color: '#00ff00', marginRight: 3 }]}>
            
            </Text>
            {"Welcome to the care section! "}
          </Text>

          <Text style={styles.text}>{showSecondText && secondText}</Text>
          <Text style={styles.text}>{showThirdText && thirdText}</Text>
        </Modal>
        <View>
          <View>
            <Image
              style={styles.CareIcon}
              source={require('./CareIcon.jpg')}
              resizeMode="contain"
            />
          </View>
          <ListItem style={{ borderTopWidth: 2 }}>
            <Text></Text>
          </ListItem>
          <ListItem>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}
            >
              <View>
                <Text style={{ alignSelf: 'flex-start' }}>Strength: 2</Text>
              </View>
              <Text></Text>
            </View>
          </ListItem>
        </View>
        <Button title="Enter" onPress={this.onPress} />
      </View>
    );
  }
}

const styles = ExtendedStyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    height: Dimensions.get('window').height / 13.34,
    width: Dimensions.get('window').width / 8.92
  },
  fightIcon: {
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'center',
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 3
  },
  text: {
    fontFamily: '$fontFamily',
    fontSize: '$mediumFont',
    color: '#000'
  }
});

CareScreen.navigationOptions = {
  tabBarLabel: 'Care',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="CareIcon" style={[styles.icon, { tintColor: tintColor }]} />
  )
};

export default CareScreen;
