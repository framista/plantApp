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
