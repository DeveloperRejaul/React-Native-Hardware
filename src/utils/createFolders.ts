import RNFetchBlob from 'rn-fetch-blob';

export const createFolders = async (phat: string) => {
  try {
    const response = await RNFetchBlob.fs.mkdir(phat);
    return response;
  } catch (error) {
    return error;
  }
};
