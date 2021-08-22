export const getFormattedPlants = (results = []) =>
  results.map(res => {
    const { score, species } = res;
    const { genus, family, commonNames, scientificName } = species;
    const { scientificName: genusScientificName } = genus;
    const { scientificName: familyScientificName } = family;
    return {
      score,
      genusScientificName,
      familyScientificName,
      commonNames,
      scientificName,
    };
  });
