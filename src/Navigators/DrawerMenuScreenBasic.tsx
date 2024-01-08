import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Page1} from '../screens/Page1';
import {Page2} from '../screens/Page2';
import {StackNavigator} from './StackNavigator';
import {SettingScreen} from '../screens/SettingScreen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerMenuScreenBasic = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{drawerType: width >= 768 ? 'permanent' : 'front'}}>
      <Drawer.Screen
        name="Home"
        options={{title: 'LOCAL HOST - HOME'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="Setings"
        options={{title: 'LOCAL HOST - SETTINGS'}}
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerMenuScreenBasic;
