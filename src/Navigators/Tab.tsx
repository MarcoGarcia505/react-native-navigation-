import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1} from '../screens/Tab1';
import {Tab2} from '../screens/Tab2';
import {Tab3} from '../screens/Tab3';
import {DrawerMenuScreenHard} from './DrawerMenuScreenHard';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform, Text} from 'react-native';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {MyTopTabs} from './TobTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropsScreenOptions {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}

interface PropsTabIcon {
  focused: boolean;
  color: string;
  size: number;
}

export const MyTabs = () => {
  return Platform.OS === 'ios' ? <MyTabsIos /> : <MyTabsIos />;
};

const TabIos = createBottomTabNavigator();
const MyTabsIos = () => {
  return (
    <TabIos.Navigator
      screenOptions={(propsScreen: PropsScreenOptions) => ({
        // tabBarIcon: (propsTabs: PropsTabIcon) => {
        //   return (
        //     <MenuIcon
        //       screenOptions={{...propsScreen}}
        //       tabBarIcon={{...propsTabs}}
        //     />
        //   );
        // },
        tabBarIcon: (propsTabs: PropsTabIcon) =>
          MenuIcon(propsScreen, propsTabs),
        tabBarActiveTintColor: 'red',
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
        headerStyle: {
          backgroundColor: '#ffffff0',
        },
      })}
      sceneContainerStyle={{backgroundColor: '#fff'}}>
      <TabIos.Screen name="tab1" options={{title: 'TABS 1'}} component={Tab1} />
      <TabIos.Screen
        name="tab2"
        options={{title: 'TABS 2'}}
        component={MyTopTabs}
      />
      <TabIos.Screen
        name="tab3"
        options={{title: 'TABS 3'}}
        component={DrawerMenuScreenHard}
      />
    </TabIos.Navigator>
  );
};

// This is not active in this vercion
// const TabAndroid = createMaterialBottomTabNavigator();
// const MyTabsAndroid = () => {
//   return (
//     <TabAndroid.Navigator>
//       <TabAndroid.Screen
//         name="tab1"
//         options={{title: 'TABS 1'}}
//         component={Tab1}
//       />
//       <TabAndroid.Screen
//         name="tab2"
//         options={{title: 'TABS 2'}}
//         component={Tab2}
//       />
//     </TabAndroid.Navigator>
//   );
// };

// const styleScreenOptions = (propsOptions: PropsScreenOptions) => ({
//   tabBarIcon: props => {
//     return <MenuIcon {...props} {...propsOptions} />;
//   },
//   tabBarActiveTintColor: 'red',
//   tabBarStyle: {
//     elevation: 0,
//     borderTopWidth: 0,
//   },
//   tabBarLabelStyle: {
//     fontWeight: 'bold',
//     fontSize: 12,
//   },
//   headerStyle: {
//     backgroundColor: '#ffffff0',
//   },
// });

const MenuIcon = (
  screenOptions: PropsScreenOptions,
  tabOptions: PropsTabIcon,
) => {
  let icon: string = '';
  const active = tabOptions.focused ? 'red' : 'grey';

  switch (screenOptions.route.name) {
    case 'tab1':
      icon = 'chatbox-outline';
      break;
    case 'tab2':
      icon = 'people-circle-outline';
      break;
    case 'tab3':
      icon = 'albums-outline';
      break;
  }

  return <Icon name={icon} size={20} color={active} />;
};
