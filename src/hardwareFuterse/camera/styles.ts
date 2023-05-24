import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: 100,
    width: 80,
    height: 80,
    marginVertical: 10,
    marginRight: -10,
  },
  pictures: {
    backgroundColor: '#fff',
    borderRadius: 100,
    width: 80,
    height: 80,
    marginVertical: 10,
    marginRight: 10,
    overflow: 'hidden',
  },
  image: {
    width: 80,
    height: 80,
  },
  imagesBody: {
    margin: 2.5,
  },
});
