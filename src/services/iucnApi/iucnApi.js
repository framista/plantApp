const IUCN_BASE_URL = 'https://apiv3.iucnredlist.org/api/v3';
import { IUCN_KEY } from '@env';

export const fetchPlantIucnStatusByName = name =>
  new Promise(async (resolve, reject) => {
    try {
      const url = `${IUCN_BASE_URL}/species/${name}?token=${IUCN_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject();
    }
  });

export const fetchIucnCountriesOccurrences = taxonId =>
  new Promise(async (resolve, reject) => {
    try {
      const url = `${IUCN_BASE_URL}/species/countries/id/${taxonId}?token=${IUCN_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      resolve(
        (data.result || []).sort((a, b) =>
          a.country > b.country ? 1 : b.country > a.country ? -1 : 0,
        ),
      );
    } catch (error) {
      reject();
    }
  });
