import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {createContext} from 'react';
const FsContext = createContext<unknown>(null);
type AppProps = {
  children?: React.ReactNode;
};
export default function FsProvider({children}: AppProps) {
  const [folderAndFiles, setFolderAndFiles] = useState<any>([]);
  return (
    <FsContext.Provider value={{folderAndFiles, setFolderAndFiles}}>
      {children}
    </FsContext.Provider>
  );
}

export const useFsContext = () => useContext(FsContext);
