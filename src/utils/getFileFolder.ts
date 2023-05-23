import RNFetchBlob from 'rn-fetch-blob';

export const getFileFolder = async (phat: string) => {
  try {
    const response = await RNFetchBlob.fs.ls(phat);
    const folder = response.filter(data => !data.includes('.'));
    const file = response.filter(data => data.includes('.'));
    return [...folder, ...file];
  } catch (error) {
    return {error};
  }
};
