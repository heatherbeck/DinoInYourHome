import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const DEFAULT_SIZE_MULTIPLIER = 0.7;
const DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER = 0.2;

class RadioButton extends Component {
  static defaultProps = {
    size: 16,
    innerColor: 'green',
    outerColor: 'green',
    isSelected: false,
    onPress: () => null
  };

  render() {
    const { size, innerColor, outerColor, isSelected, onPress } = this.props;
    const outerStyle = {
      borderColor: outerColor,
      width: size + size * DEFAULT_SIZE_MULTIPLIER,
      height: size + size * DEFAULT_SIZE_MULTIPLIER,
      borderRadius: (size + size * DEFAULT_SIZE_MULTIPLIER) / 2,
      borderWidth: size * DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER
    };

    const innerStyle = {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: innerColor
    };

    return (
      <TouchableOpacity style={[styles.radio, outerStyle]} onPress={onPress}>
        {isSelected ? <View style={innerStyle} {...this.props} /> : null}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});

export default RadioButton;
