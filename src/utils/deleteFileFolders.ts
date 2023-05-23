import RNFetchBlob from 'rn-fetch-blob';

export const deleteFileFolders = async (phat: string) => {
  try {
    await RNFetchBlob.fs.unlink(phat);
  } catch (error) {
    return error;
  }
};
