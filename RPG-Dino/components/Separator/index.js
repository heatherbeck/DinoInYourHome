import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Separator = ({ customStyles }) => {
  return <View style={[styles.separator, customStyles]} />;
};

export default Separator;
