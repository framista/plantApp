export const plantsHistoryInitData = [
  {
    gbif: '7267339',
    scientificName: 'Dianthus nitidus',
  },
  {
    gbif: '9004024',
    scientificName: 'Montia fontana L.',
  },
  {
    gbif: '3021932',
    scientificName: 'Cerasus fruticosa Pall.',
  },
  {
    gbif: '2817361',
    scientificName: 'Hammarbya paludosa',
  },
  {
    gbif: '5373247',
    scientificName: 'Cochlearia polonica',
  },
  {
    gbif: '2728174',
    scientificName: 'Carex chordorrhiza',
  },
  {
    gbif: '2725881',
    scientificName: 'Carex limosa',
  },
  {
    gbif: '2808566',
    scientificName: 'Anacamptis morio',
  },
  {
    gbif: '9006573',
    scientificName: 'Anacamptis palustris',
  },
  {
    gbif: '3928615',
    scientificName: 'Pulsatilla vernalis',
  },
].sort((a, b) =>
  a.scientificName > b.scientificName
    ? 1
    : b.scientificName > a.scientificName
    ? -1
    : 0,
);
