import { View } from 'react-native';
import React from 'react';
import styles from './styles';

const ListItem = ({ children, style }) => (
  <View style={[styles.listItem, style]}>{children}</View>
);

export default ListItem;
