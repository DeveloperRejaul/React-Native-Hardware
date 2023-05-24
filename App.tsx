import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './src/rtk/app/store';
import CameraNavigation from './src/hardwareFuterse/camera/navigation';
import RootNavigation from './src/navigation/RootNavigation/Root';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <RootNavigation />
        {/* <CameraNavigation /> */}
      </NativeBaseProvider>
    </Provider>
  );
}
