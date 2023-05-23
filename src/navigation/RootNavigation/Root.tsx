import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InnerPage from '../../hardwareFuterse/fs/InnerPage/InnerPage';
import FsProvide from '../../hardwareFuterse/fs/FsProvide';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FsProvide} />
        <Stack.Screen
          name="InnerPage"
          component={InnerPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
