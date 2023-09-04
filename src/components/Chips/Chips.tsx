import React from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';

const Chips = ({ items }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {items.map(item => <Chip style={{ margin: 10 }} compact onPress={() => console.log('Pressed')}>{item}</Chip>)}
    </View>
  );
}

export default Chips;