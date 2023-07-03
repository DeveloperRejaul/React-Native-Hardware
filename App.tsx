import {StatusBar} from 'react-native';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './src/rtk/app/store';
import Index from './src/hardwareFuterse/videoPlayer/index';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <Index />
        {/* <CameraNavigation /> */}
      </NativeBaseProvider>
    </Provider>
  );
}
