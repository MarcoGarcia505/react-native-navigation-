import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingScreen} from '../screens/SettingScreen';
import {Image, useWindowDimensions} from 'react-native';
import {Text, View, TouchableOpacity} from 'react-native';
import {stylesGlobal} from '../themes/globalStyles';
import {SafeAreaScreen} from '../screens/SafeAreaScreen';
import {ScreenStack} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const StackScreenGeneric = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Test Safe Area" component={SafeAreaScreen} />
//     </Stack.Navigator>
//   );
// };

export const DrawerMenuScreenHard = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{drawerType: width >= 768 ? 'permanent' : 'front'}}
      drawerContent={props => <MenuInterno {...props} />}>
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
      <Drawer.Screen name="Test Safe Area" component={SafeAreaScreen} />
    </Drawer.Navigator>
  );
};

// Here we create a lateral menu using DrawelScreen
const MenuInterno = (props: DrawerContentComponentProps) => {
  console.log(props);
  return (
    <DrawerContentScrollView>
      <View style={stylesGlobal.containerMenu}>
        <Image
          style={stylesGlobal.menuImage}
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Text>Peter Parker</Text>
      </View>
      <View style={stylesGlobal.menuContainerOptions}>
        <TouchableOpacity
          style={stylesGlobal.buttonMenu}
          onPress={() => props.navigation.navigate('Home')}>
          <Text>HOME PAGE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesGlobal.buttonMenu}
          onPress={() => props.navigation.navigate('Setings')}>
          <Text>SETTINGS PAGE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesGlobal.buttonMenu}
          onPress={() => props.navigation.navigate('Test Safe Area')}>
          <Text>Safe Area PAGE</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
