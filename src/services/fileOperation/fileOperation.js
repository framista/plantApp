import RNFS from 'react-native-fs';

export const readImageFile = uri =>
  new Promise((resolve, reject) => {
    try {
      const file = RNFS.readFile(uri, 'base64');
      resolve(file);
    } catch (err) {
      reject(err);
    }
  });
