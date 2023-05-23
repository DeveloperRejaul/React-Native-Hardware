import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FlatListCom from '../../../components/flatList/FlatListCom';
import {getFileFolder} from '../../../utils/getFileFolder';

export default function InnerPage({navigation, route}) {
  const [files, setFiles] = useState<string[]>([]);
  const phat = route.params.phat;

  useEffect(() => {
    const init = async () => {
      const result = await getFileFolder(phat);
      setFiles(result);
    };

    init();
  }, []);

  return (
    <View>
      <Text>{phat}</Text>
      <FlatListCom data={files} deleteFileFolder={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({});
