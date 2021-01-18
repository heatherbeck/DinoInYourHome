import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


const radioProps = [
  { label: 'CrestedGecko', value: 0 },
  { label: 'BeardedDragon', value: 1 },
  { label: 'BlueTonguedSkink', value: 2 },
  { label: 'WhiteTreeFrog', value: 3 }
];

class IntroScreen extends Component {
  state = {
    isModalVisible: false,
    open: false
  };

  _showModal = () => this.setState({ isModalVisible: true });

  _hideModal = () => this.setState({ isModalVisible: false });
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
     Here You Will Find The Wonderful Friends From The Reptile and Amphibian Families!
     Choose Carefully As Each Friend Has Different Needs!
        </Text>
        <Text style={styles.welcome}>Who were you before ?</Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
          }}
        >
          <RadioForm
            radio_props={radioProps}
            initial={0}
            style={{ alignItems: 'flex-start', margin: 10 }}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={'#2196f3'}
            animation={true}
            onPress={value => {
              this.setState({ value });
            }}
          />
          <Icon name="question" size={30} color="#000" />
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <TextInput
            placeholder="What is your name ?"
            style={{
              height: 40,
              width: 300,
              borderWidth: 1,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderColor: 'grey'
            }}
            onChangeText={text => this.setState({ text })}
            value={null}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Button
            style={{ justifyContent: 'center', flex: 1 }}
            onPress={() => {}}
            title="Start game"
          />
          <Button onPress={() => {}} title="Instructions" />
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <TouchableOpacity onPress={() => this.setState({ open: true })}>
            <Text>Open modal</Text>
          </TouchableOpacity>
          <Modal
            offset={0}
            open={this.state.open}
            animationDuration={0}
            animationTension={0}
            modalDidOpen={() => console.log('modal did open')}
            modalDidClose={() => this.setState({ open: false })}
            containerStyle={{
              justifyContent: 'center'
            }}
            modalStyle={{
              borderRadius: 2,
              margin: 20,
              padding: 10,
              backgroundColor: '#F5F5F5'
            }}
          >
            <View>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>
                Welcome To Dino In Your Home!
              </Text>
              <TouchableOpacity
                style={{ margin: 5 }}
                onPress={() => this.setState({ offset: -100 })}
              >
                <Text>Move modal up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ margin: 5 }}
                onPress={() => this.setState({ offset: 0 })}
              >
                <Text>Reset modal position</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ margin: 5 }}
                onPress={() => this.setState({ open: false })}
              >
                <Text>Close modal</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#F5FCFF'
  },
  radioContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'auto',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default IntroScreen;
