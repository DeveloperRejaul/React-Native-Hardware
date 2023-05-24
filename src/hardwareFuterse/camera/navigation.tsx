import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from './Index';
import ImageGallery from './gallery/ImageGallery';
import ZoomImage from './gallery/ZoomImage';

const Stack = createNativeStackNavigator();
export default function CameraNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Index}
          name="camera"
          options={{headerShown: false}}
        />
        <Stack.Screen component={ImageGallery} name="ImageGallery" />
        <Stack.Screen
          component={ZoomImage}
          name="ZoomImage"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
