import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import RNFetchBlob from 'rn-fetch-blob';
import {useNavigation} from '@react-navigation/native';

export default function FlatListCom({data, deleteFileFolder}) {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      keyExtractor={({item, index}) => Math.random()}
      contentContainerStyle={styles.itemsBody}
      numColumns={3}
      horizontal={false}
      columnWrapperStyle={styles.colulms}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.items}
            onLongPress={() => {
              deleteFileFolder(item);
            }}
            onPress={() => {
              const phat = RNFetchBlob.fs.dirs.DocumentDir;
              const isFolder = !item.includes('.');
              isFolder &&
                navigation.navigate('InnerPage', {
                  phat: `${phat}/${item}`,
                });
            }}>
            {item.includes('.') ? (
              <AntIcon size={40} name="file1" />
            ) : (
              <Icon name="folder-outline" size={40} />
            )}
            <Text>
              {item.length < 10 ? item : item.substring(0, 10) + '...'}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  colulms: {
    marginVertical: 10,
    columnGap: Dimensions.get('screen').width / 4 / 3,
  },
  itemsBody: {
    alignSelf: 'center',
  },
  items: {
    width: Dimensions.get('screen').width / 4,
    height: Dimensions.get('screen').height / 10,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
});
