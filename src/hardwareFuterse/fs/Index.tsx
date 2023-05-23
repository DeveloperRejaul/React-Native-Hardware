import {StyleSheet, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNFetchBlob from 'rn-fetch-blob';

import FlatListCom from '../../components/flatList/FlatListCom';
import {useFsContext} from '../../context/FsContext';
import {getFileFolder} from '../../utils/getFileFolder';
import {createFiles} from '../../utils/createFile';
import {createFolders} from '../../utils/createFolders';
import ModalCom from '../../components/modal/ModalCom';
import Button from '../../components/button/Button';
import {deleteFileFolders} from '../../utils/deleteFileFolders';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [fileInput, setFileInput] = useState('');
  const [modalVisible2, setModalVisible2] = useState(false);
  const [fileInput2, setFileInput2] = useState('');
  const {folderAndFiles: data, setFolderAndFiles} = useFsContext();

  useEffect(() => {
    getFolderAndFiles();
  }, []);

  const deleteFileFolder = async (basePhat: string) => {
    const phat = RNFetchBlob.fs.dirs.DocumentDir + '/' + basePhat;
    await deleteFileFolders(phat);
    getFolderAndFiles();
  };

  const createFolder = async () => {
    const phat = RNFetchBlob.fs.dirs.DocumentDir + '/' + fileInput2;
    // const phat2 = RNFetchBlob.fs.dirs.PictureDir + '/' + fileInput2;
    // const phat2 = RNFetchBlob.fs.dirs.CacheDir + '/' + fileInput2;
    // const phat2 = RNFetchBlob.fs.dirs.DownloadDir + '/' + fileInput2;
    // const phat2 = RNFetchBlob.fs.dirs.MainBundleDir + '/' + fileInput2;
    // const phat2 = RNFetchBlob.fs.dirs.MovieDir + '/' + fileInput2;
    // const phat2 = RNFetchBlob.fs.dirs.MusicDir + '/' + fileInput2;
    // const phat2 = RNFetchBlob.fs.dirs.PictureDir + '/' + fileInput2;
    await createFolders(phat);
    await getFolderAndFiles();
  };

  const getFolderAndFiles = async () => {
    const result = await getFileFolder(RNFetchBlob.fs.dirs.DocumentDir);
    setFolderAndFiles(result);
  };

  const createFile = async () => {
    const phat = `${RNFetchBlob.fs.dirs.DocumentDir}/${fileInput}`;
    const result = createFiles(phat, 'hello');
    getFolderAndFiles();
  };

  return (
    <View style={styles.container}>
      <FlatListCom data={data} deleteFileFolder={deleteFileFolder} />

      {/* Modal And bottom Buttons  */}

      <Button onPress={() => setModalVisible(true)} text="Create File" />
      <Button
        onPress={() => setModalVisible2(true)}
        text="Create Folder"
        style={{bottom: 20}}
      />

      <ModalCom
        onChangeText={setFileInput}
        onPress={() => {
          createFile();
          setModalVisible(false);
          setFileInput('');
        }}
        value={fileInput}
        onRequestClose={() => setModalVisible(false)}
        visible={modalVisible}
        text={'Create File'}
      />
      <ModalCom
        onChangeText={setFileInput2}
        onPress={() => {
          setModalVisible2(false);
          createFolder();
          setFileInput2('');
        }}
        value={fileInput2}
        onRequestClose={() => setModalVisible2(false)}
        visible={modalVisible2}
        text={'Create Folder'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  createFolder: {
    position: 'absolute',
    right: 10,
    bottom: 20,
    backgroundColor: '#05BFDB',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
    width: 140,
  },
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentBody: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    shadowColor: '#000',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalInput: {
    width: Dimensions.get('screen').width - 50 - 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#393646',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15,
  },
  modalText: {
    fontSize: 15,
    marginTop: 5,
    color: '#000',
    fontWeight: '500',
    backgroundColor: '#0E8388',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    width: (Dimensions.get('screen').width - 50 - 50) / 2,
    textAlign: 'center',
  },
  itemsBody: {
    alignSelf: 'center',
  },
  colulms: {
    marginVertical: 10,
    columnGap: Dimensions.get('screen').width / 4 / 3,
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
