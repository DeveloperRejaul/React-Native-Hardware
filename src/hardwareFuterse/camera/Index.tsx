import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {RNCamera} from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob';
import {baseUrl} from './contests';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../rtk/app/hooks';
import {setImage, setImages} from '../../rtk/futures/camera/cameraSlice';

type AppProps = {
  navigation: any;
};

export default function Index({navigation}: AppProps) {
  const camera = useRef<undefined>();
  const {images} = useAppSelector(state => state.camera);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      const imagesPhat = `${RNFetchBlob.fs.dirs.CacheDir}/Camera/`;
      const result = await RNFetchBlob.fs.ls(imagesPhat);
      dispatch(setImages(result));
    };
    init();
  }, []);

  let takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const {uri} = await camera.current.takePictureAsync(options);
      const newImage = uri.replace(baseUrl, '');
      dispatch(setImage(newImage));
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        ref={camera}
        style={styles.preview}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />

      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity onPress={takePicture} style={styles.capture} />
        <TouchableOpacity
          style={styles.pictures}
          onPress={() => navigation.navigate('ImageGallery')}>
          {images?.map(data => (
            <Image
              style={styles.image}
              source={{
                uri: baseUrl + data,
              }}
            />
          ))}
        </TouchableOpacity>
      </View>
    </View>
  );
}
