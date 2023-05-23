import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import RootNavigation from './src/navigation/RootNavigation/Root';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <NativeBaseProvider>
        <RootNavigation />
      </NativeBaseProvider>
    </>
  );
}

const styles = StyleSheet.create({});
