import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ChatScreen = () => {
  return (
    <View>
      <Text>
        <Icon name="battery-full-outline" size={30} color="#900" />
      </Text>
      <Text>
        <Icon name="chatbox-outline" size={30} color="#900" />
      </Text>
    </View>
  );
};
