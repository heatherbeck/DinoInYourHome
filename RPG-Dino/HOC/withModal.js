import React, { Component } from 'react';
import Modal from '../components/Modal';
import { View, Text } from 'react-native';
import information from '../misc/information';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';

export default WrappedComponent => {
  return class WithModal extends Component {
    static navigationOptions = props => {
      if (typeof WrappedComponent.navigationOptions === 'function') {
        return WrappedComponent.navigationOptions(props);
      }
      return { ...WrappedComponent.navigationOptions };
    };
    state = {
      visible: false,
      informationToShow: ''
    };

    onPress = type => {
      this.setState({ informationToShow: type, visible: true });
    };

    hideModal = () => {
      this.setState({ informationToShow: '', visible: false });
    };

    render() {
      const { visible, informationToShow } = this.state;
      return (
        <View style={styles.container}>
          <Modal
            visible={visible}
            closeOnTouchOutside
            hideModal={this.hideModal}
            animationType="fade"
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.60)' }}
            childrenWrapperStyle={{ backgroundColor: '#FFFF' }}
          >
            <Text style={styles.text}>{information[informationToShow]}</Text>
          </Modal>
          <WrappedComponent
            {...this.props}
            hideModal={this.hideModal}
            openModal={this.onPress}
          />
        </View>
      );
    }
  };
};

const styles = ExtendedStyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontFamily: '$fontFamily',
    fontSize: '$mediumFont',
    color: '#0ff'
  }
});
