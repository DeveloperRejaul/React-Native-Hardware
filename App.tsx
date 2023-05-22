import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Index from './src/fs/Index';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({});
