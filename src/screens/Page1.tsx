import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {stylesGlobal} from '../themes/globalStyles';

interface Props extends StackScreenProps<any, any> {}
export const Page1 = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Home 1',
    });
  }, []);
  return (
    <View style={stylesGlobal.body}>
      <Text style={stylesGlobal.title}>Page 1</Text>

      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('page2')}
      />

      <Text style={stylesGlobal.title}>
        Go to see Pedro and Juna, new Screeen
      </Text>
      <View style={stylesGlobal.containerButtons}>
        <TouchableOpacity
          style={{...stylesGlobal.button, backgroundColor: 'red'}}
          onPress={() =>
            navigation.navigate('personPage', {
              id: 1,
              name: 'Pedro',
              age: 20,
            })
          }>
          <Text style={stylesGlobal.buttonText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...stylesGlobal.button, backgroundColor: 'green'}}
          onPress={() =>
            navigation.navigate('personPage', {
              id: 1,
              name: 'Juana',
              age: 20,
            })
          }>
          <Text style={stylesGlobal.buttonText}>Juna</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
