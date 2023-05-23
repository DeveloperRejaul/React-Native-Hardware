import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Index from './Index';
import FsProvider from '../../context/FsContext';

export default function FsProvide() {
  return (
    <FsProvider>
      <Index />
    </FsProvider>
  );
}

const styles = StyleSheet.create({});
