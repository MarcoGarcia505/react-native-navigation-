import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackNavigator} from '../Navigators/StackNavigator';

interface Props extends StackScreenProps<RootStackNavigator, 'page2'> {}

export const Page2 = ({navigation}: Props) => {
  return (
    <View>
      <Text>Page 2</Text>
      <Button
        title="Go to page 1"
        onPress={() => navigation.navigate('page1')}
      />
      <Button
        title="Go to page 3"
        onPress={() =>
          navigation.navigate('page3', {
            id: 1,
            name: 'Local Host',
            age: 20,
          })
        }
      />
    </View>
  );
};
