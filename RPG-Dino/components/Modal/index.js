import React from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import Icon from '../Icon';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';

const styles = ExtendedStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  innerContainer: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: 'white'
  }
});

class Overlay extends React.Component {
  stopPropagation = e => e.stopPropagation();

  render() {
    const {
      animationType,
      closeOnTouchOutside,
      children,
      hideModal,
      containerStyle,
      visible,
      childrenWrapperStyle,
      ...extraProps
    } = this.props;
    return (
      <Modal
        animationType={animationType}
        transparent
        visible={visible}
        onRequestClose={hideModal}
        {...extraProps}
      >
        <TouchableWithoutFeedback onPress={hideModal}>
          <View style={[styles.container, containerStyle]}>
            <TouchableWithoutFeedback onPress={this.stopPropagation}>
              <View style={[styles.innerContainer, childrenWrapperStyle]}>
                <View
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 10
                  }}
                >
                  <TouchableOpacity onPress={hideModal}>
                    <Icon style={{ alignSelf: 'flex-end' }} name="closeIcon" />
                  </TouchableOpacity>
                  {children}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default Overlay;
