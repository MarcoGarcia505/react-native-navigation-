import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {stylesGlobal} from '../themes/globalStyles';
import {RootStackNavigator} from '../Navigators/StackNavigator';

interface Props extends StackScreenProps<RootStackNavigator, 'personPage'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.name,
    });
  }, []);
  return (
    <View style={stylesGlobal.body}>
      <Text style={stylesGlobal.title}>
        {JSON.stringify(route.params, null, 3)}
      </Text>
    </View>
  );
};
