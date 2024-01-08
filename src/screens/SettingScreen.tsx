import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';

interface Props extends DrawerScreenProps<any, any> {}
export const SettingScreen = (props: Props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          title="Menu"
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
      ),
    });
  }, []);
  return (
    <View>
      <Text>SettingScreen</Text>
    </View>
  );
};
