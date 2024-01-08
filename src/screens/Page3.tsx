import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackNavigator} from '../Navigators/StackNavigator';

// interface ParamsProps {
//   id: number;
//   name: string;
//   age: number;
// }
interface Props extends StackScreenProps<RootStackNavigator, 'page3'> {}

export const Page3 = (props: Props) => {
  console.log(props.route.params);

  // const newParams = props.route.params as ParamsProps;
  return (
    <View>
      <Text>{JSON.stringify(props.route.params, null, 3)}</Text>
    </View>
  );
};
