import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from '../../components/forms';
import { PageContainer } from '../../components/layout/containers';
import BiologyDetails from './BiologyDetails/BiologyDetails';
import OccurrencesList from './OccurrencesList/OccurrencesList';

import getStyles from './PlantDetails.styles';

const PlantDetails = () => {
  const plantDetails = useSelector(state => state.plantsCurrent.plantDetails);
  const styles = getStyles();

  return (
    <PageContainer style={styles.container}>
      <BiologyDetails biology={plantDetails.biology} />
      <Button primary text="IUCN STATUS" icon="error" />
      {plantDetails.occurrences.length > 0 && (
        <OccurrencesList occurrences={plantDetails.occurrences} />
      )}
    </PageContainer>
  );
};

export default PlantDetails;
