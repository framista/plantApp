import { API_PLANT_KEY } from '@env';
import RNFetchBlob from 'rn-fetch-blob';

const BASE_URL = 'https://my-api.plantnet.org';
const IDENTIFY_URL = 'v2/identify/all';

export const identifyPlant = async base64 =>
  new Promise(async (resolve, reject) => {
    try {
      const { url, header, body } = identifyPlantData(base64);
      const response = await RNFetchBlob.fetch('POST', url, header, body);
      const data = await response.json();
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });

const identifyPlantData = base64 => {
  const url = `${BASE_URL}/${IDENTIFY_URL}?api-key=${API_PLANT_KEY}`;
  const header = { 'Content-Type': 'multipart/form-data' };
  const body = [
    {
      name: 'images',
      filename: 'image_1.jpg',
      type: 'image/jpeg',
      data: base64,
    },
    { name: 'organs', data: 'leaf' },
  ];
  return { url, header, body };
};
