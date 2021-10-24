import { PLANTS_HISTORY_KEY } from '../constants/asyncStorage/keys';
import { plantsHistoryInitData } from '../constants/plants/plantsHistory';
import { getData, storeData } from '../services/asyncStorage/asyncStorage';
import { formatDate } from './dateHelper';
import { getUniqueId } from './uniqueId';

export const getFormattedPlants = (results = []) =>
  results.map(res => {
    const { score, species, gbif } = res;
    const { genus, family, commonNames, scientificName } = species;
    const { scientificName: genusScientificName } = genus;
    const { scientificName: familyScientificName } = family;
    return {
      id: getUniqueId(),
      score,
      genusScientificName,
      familyScientificName,
      commonNames,
      scientificName,
      gbifId: gbif.id,
    };
  });

export const getFormattedPlantDetails = (results = []) => {
  const [firstRes] = results;
  const info = {
    biology: {
      scientificName: firstRes.scientificName,
      kingdom: firstRes.kingdom,
      phylum: firstRes.phylum,
      order: firstRes.order,
      family: firstRes.family,
      genus: firstRes.genus,
      species: firstRes.species,
      genericName: firstRes.genericName,
      specificEpithet: firstRes.specificEpithet,
      iucnRedListCategory: firstRes.iucnRedListCategory,
    },
  };
  let counter = 0;
  const occurrences = results.reduce((list, res) => {
    if (!res.media[0]?.identifier || counter > 7) {
      return list;
    }
    counter++;
    return [
      ...list,
      {
        id: res.key,
        country: res.country,
        eventDate: formatDate(res.eventDate),
        media: res.media[0].identifier.replace('http://', 'https://'),
      },
    ];
  }, []);
  return { ...info, occurrences };
};

export const addPlantToStorage = async (gbif, plantDetails) => {
  try {
    const storedData = await getData(PLANTS_HISTORY_KEY, plantsHistoryInitData);
    const newItems = [
      { gbif, scientificName: plantDetails.biology.scientificName },
      ...storedData.filter(d => d.gbif !== gbif).slice(0, 14),
    ];
    await storeData(PLANTS_HISTORY_KEY, JSON.stringify(newItems));
  } catch (err) {
    console.log(err);
  }
};

export const getFormattedIucnStatus = data => ({
  category: data.category,
  class: data.class,
  populationTrend: data.population_trend,
  scientificName: data.scientific_name,
  taxonId: data.taxonid,
});
