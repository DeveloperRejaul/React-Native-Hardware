import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type AppProps = {
  onPress: () => void;
  text: string;
  style?: object;
};

export default function Button({onPress, text, style}: AppProps) {
  return (
    <TouchableOpacity style={[styles.createFile, style]} onPress={onPress}>
      <Text style={styles.createFolderText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  createFile: {
    position: 'absolute',
    right: 10,
    bottom: 60,
    backgroundColor: '#05BFDB',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
    width: 140,
  },
  createFolderText: {
    fontSize: 17,
    color: '#18122B',
    fontWeight: '600',
    textAlign: 'center',
  },
});
