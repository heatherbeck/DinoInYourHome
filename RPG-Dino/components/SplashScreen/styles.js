import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Dimensions } from 'react-native';

const separatorWidth = Dimensions.get('window').width * 0.785;

export default ExtendedStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});
