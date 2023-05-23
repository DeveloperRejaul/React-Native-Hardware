import RNFetchBlob from 'rn-fetch-blob';

export const createFiles = async (
  phat: string,
  content: string,
  cb?: () => any,
) => {
  try {
    const response = await RNFetchBlob.fs.createFile(phat, content, 'utf8');
    return response;
  } catch (error) {
    return error;
  }
};
