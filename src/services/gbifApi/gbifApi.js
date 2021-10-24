const GBIF_BASE_URL = 'https://api.gbif.org';

export const fetchPlantInfoByGbifId = async gbifId =>
  new Promise((resolve, reject) => {
    try {
      const url = `${GBIF_BASE_URL}/v1/occurrence/search?taxonKey=${gbifId}`;
      const response = fetch(url);
      resolve(response);
    } catch (error) {
      reject();
    }
  });
