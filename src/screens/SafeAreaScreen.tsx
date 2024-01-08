import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SafeAreaScreen = () => {
  // This hooks is to save area in the screen, and give us all properties to evit that text is hide
  const insets = useSafeAreaInsets();
  console.log('insets: ', insets);

  return (
    <View style={{marginTop: insets.top}}>
      <Text>Local</Text>
    </View>
  );
};
