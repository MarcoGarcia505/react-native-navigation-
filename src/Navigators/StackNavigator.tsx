import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1} from '../screens/Page1';
import {Page2} from '../screens/Page2';
import {Page3} from '../screens/Page3';
import {PersonScreen} from '../screens/PersonScreen';

export type RootStackNavigator = {
  page1: undefined;
  page2: undefined;
  page3: {
    id: number;
    name: string;
    age: number;
  };
  personPage: {
    id: number;
    name: string;
    age: number;
  };
};

const Stack = createStackNavigator<RootStackNavigator>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="page1" component={Page1} />
      <Stack.Screen name="page3" component={Page3} />
      <Stack.Screen name="page2" component={Page2} />
      <Stack.Screen name="personPage" component={PersonScreen} />
    </Stack.Navigator>
  );
};
