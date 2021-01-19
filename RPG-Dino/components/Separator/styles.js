import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const separatorWidth = Dimensions.get('window').width * 0.785;

export default ExtendedStyleSheet.create({
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: '$opacityBlack'
  }
});
