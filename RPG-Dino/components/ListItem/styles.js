import { Dimensions } from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';

const listItemHeight = Dimensions.get('window').height / 14;

export default ExtendedStyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: listItemHeight,
    borderBottomWidth: 2,
    borderColor: '$opacityBlack'
  }
});
