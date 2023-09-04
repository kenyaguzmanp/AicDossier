import React, { useState } from 'react';
import { Divider, List, Text } from 'react-native-paper';
import ChevronUp from '../ChevronIconUp/ChevronIconUp';
import ChevronDown from '../ChevronDownIcon/ChevronDownIcon';
import { View } from 'react-native';

const Accordion = ({ title, items }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title={title}
        right={() => expanded ? <ChevronUp /> : <ChevronDown />}
        expanded={expanded}
        onPress={handlePress}
      >
        {items.map(item => {
          return (
            <View style={{ paddingHorizontal: 12 }}>
              <Text>{item.title}</Text>
            </View>
          )
          
        })}
      </List.Accordion>
      <Divider />
    </List.Section>
  );
};

export default Accordion;