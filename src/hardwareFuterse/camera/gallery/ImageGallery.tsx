import {TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../../rtk/app/hooks';
import {Image} from 'react-native';
import {baseUrl, width} from '../contests';
import {FlatList, ScrollView} from 'native-base';
import {styles} from '../styles';
import Animated from 'react-native-reanimated';

export default function ImageGallery({navigation}: any) {
  const {images} = useAppSelector(state => state.camera);

  return (
    <FlatList
      data={images}
      numColumns={5}
      horizontal={false}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.imagesBody}
            onPress={() =>
              navigation.navigate('ZoomImage', {
                imageUrl: baseUrl + item,
              })
            }>
            <Animated.Image
              sharedTransitionTag="sharedTag"
              style={{
                height: width / 5 - 5,
                width: width / 5 - 5,
                borderRadius: 5,
              }}
              source={{uri: baseUrl + item}}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
}
