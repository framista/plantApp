import React from 'react';
import { useSelector } from 'react-redux';

import { PageContainer } from '../../components/layout/containers';
import BiologyDetails from './BiologyDetails/BiologyDetails';
import OccurrencesList from './OccurrencesList/OccurrencesList';

const PlantDetails = () => {
  const plantDetails = useSelector(state => state.plantsCurrent.plantDetails);

  return (
    <PageContainer>
      <BiologyDetails biology={plantDetails.biology} />
      <OccurrencesList occurrences={plantDetails.occurrences} />
    </PageContainer>
  );
};

export default PlantDetails;
