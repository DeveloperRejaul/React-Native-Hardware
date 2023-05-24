import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {height, width} from '../contests';

export default function ZoomImage({route}: any) {
  const imageUrl = route.params.imageUrl;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.Image
        sharedTransitionTag="sharedTag"
        style={{
          height: height - 70,
          width: width - 10,
          borderRadius: 20,
          resizeMode: 'cover',
        }}
        source={{uri: imageUrl}}
      />
    </View>
  );
}
