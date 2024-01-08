import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContatsScreen} from '../screens/ContatsScreen';
import {AlbunsScreen} from '../screens/AlbunsScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ParamListBase, RouteProp} from '@react-navigation/native';

interface PropsScreenOptions {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}

interface PropsTabIcon {
  focused: boolean;
  color: string;
  size: number;
}

const Tab = createMaterialTopTabNavigator();

export const MyTopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={(propsScreen: PropsScreenOptions) => ({
        tabBarIcon: (propsTabs: PropsTabIcon) =>
          MenuIcon(propsScreen, propsTabs),
        tabBarPressColor: 'red',
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
        },
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      })}
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContatsScreen} />
      <Tab.Screen name="Albuns" component={AlbunsScreen} />
    </Tab.Navigator>
  );
};

const MenuIcon = (
  screenOptions: PropsScreenOptions,
  tabOptions: PropsTabIcon,
) => {
  let icon: string = '';

  switch (screenOptions.route.name) {
    case 'Chat':
      icon = 'chatbox-outline';
      break;
    case 'Contacts':
      icon = 'people-circle-outline';
      break;
    case 'Albuns':
      icon = 'albums-outline';
      break;
  }

  return <Icon name={icon} size={20} color="#900" />;
};
