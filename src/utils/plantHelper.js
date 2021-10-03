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
