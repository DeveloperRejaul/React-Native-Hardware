import {Dimensions, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import Video from 'react-native-video';
import colorVideo from './video.mp4';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
const SWidth = Dimensions.get('screen').width;
const SHeight = SWidth * 0.5625;

function secondToTime(time: number) {
  return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
}

export default function Index(): React.JSX.Element {
  const player = useRef<undefined>();
  const [paused, setPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const handleProgress = (progress: any) => {
    setProgress(progress.currentTime / duration);

    setTimeProgress(progress.currentTime);
  };

  const handleEnd = () => {
    setPaused(true);
  };
  const handleMainButtonTouch = () => {
    if (progress >= 0.98) {
      player.current.seek(0);
    }

    setPaused(pre => !pre);
  };
  const handleProgressPress = (e: any) => {
    // player.current.seek(e.nativeEvent.locationX, SWidth);
  };

  return (
    <View style={styles.container}>
      <View>
        <Video
          source={colorVideo}
          style={{width: SWidth, height: SHeight}}
          resizeMode="contain"
          paused={paused}
          onLoad={handleLoad}
          onProgress={handleProgress}
          onEnd={handleEnd}
          ref={player}
        />
        <View style={styles.controls}>
          <Pressable onPress={handleMainButtonTouch}>
            <Icon name={!paused ? 'pause' : 'play'} size={30} color="#fff" />
          </Pressable>
          <Pressable onPress={handleProgressPress}>
            <Progress.Bar
              progress={progress}
              width={250}
              color="#fff"
              unfilledColor="rgba(255,255,255,.5)"
              borderColor="#fff"
              height={20}
            />
          </Pressable>
          <Text style={styles.duration}>
            {secondToTime(Math.floor(timeProgress))}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 250,
  },
  controls: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 48,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  mainButton: {
    marginRight: 15,
  },
  duration: {
    color: '#fff',
    marginLeft: 15,
  },
});
