import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../components/forms';
import { PageContainer } from '../../components/layout/containers';
import { showIucnStatus } from '../../store/iucnStatus/iucnStatus.actions';
import BiologyDetails from './BiologyDetails/BiologyDetails';
import OccurrencesList from './OccurrencesList/OccurrencesList';

import getStyles from './PlantDetails.styles';

const PlantDetails = () => {
  const plantDetails = useSelector(state => state.plantsCurrent.plantDetails);
  const styles = getStyles();
  const dispatch = useDispatch();

  const openIucnStatusDetails = () => {
    dispatch(showIucnStatus(plantDetails.biology.species));
  };

  return (
    <PageContainer style={styles.container}>
      <BiologyDetails biology={plantDetails.biology} />
      <Button
        primary
        text="IUCN STATUS"
        icon="error"
        onPress={openIucnStatusDetails}
      />
      {plantDetails.occurrences.length > 0 && (
        <OccurrencesList occurrences={plantDetails.occurrences} />
      )}
    </PageContainer>
  );
};

export default PlantDetails;
