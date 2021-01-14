import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import ListItem from '../RPG-Dino/ListItem';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';

const List = ({ list, children, style }) => (
  <View>
    {list.map(item => (
      <ListItem key={item.name}>
        <View style={[styles.textContainer, style]}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
        {children(item)}
      </ListItem>
    ))}
  </View>
);

const styles = ExtendedStyleSheet.create({
  textContainer: {
    marginLeft: '$listMarginHorizontal',
    flex: 4.5,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  text: {
    fontFamily: '$fontFamily',
    fontSize: '$bigFont'
  }
});

export default List;
