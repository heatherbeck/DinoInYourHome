import React, { Component } from 'react';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import { Animated } from 'react-native';
import * as expandableTables from '../constants/expandableTables';

export default WrappedComponent => {
  return class WithExpandableTables extends Component {
    static navigationOptions = props => {
      if (typeof WrappedComponent.navigationOptions === 'function') {
        return WrappedComponent.navigationOptions(props);
      }
      return { ...WrappedComponent.navigationOptions };
    };
    state = {
      expandedTables: Object.assign(
        ...Object.keys(expandableTables).map(table => ({ [table]: false }))
      ),
      animation: new Animated.Value(),
      minHeight: 0,
      maxHeight: 0
    };

    onPress = table => {
      this.setState(prevState => ({
        expandedTables: {
          ...prevState.expandedTables,
          [table]: !prevState.expandedTables[table]
        }
      }));
    };

    setMaxHeight = event => {
      this.setState({
        maxHeight: event.nativeEvent.layout.height
      });
    };

    setMinHeight = event => {
      this.setState({
        minHeight: event.nativeEvent.layout.height
      });
    };

    render() {
      const { expandedTables } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          setMinHeight={this.setMinHeight}
          setMaxHeight={this.setMaxHeight}
          expandedTables={expandedTables}
          expandTable={this.onPress}
        />
      );
    }
  };
};
